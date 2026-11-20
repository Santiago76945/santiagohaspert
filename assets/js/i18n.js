/*
 * Tiny bilingual engine (EN/ES).
 * - English lives in the HTML. Spanish strings come from window.I18N_ES (defined per page).
 * - Spanish device (navigator.language starts with "es") → Spanish UI, anything else → English.
 * - A manual choice from the EN/ES toggle is remembered per browser.
 * Loaded in <head>: decides the language before first paint; the page is revealed once applied.
 */
(function () {
  var KEY = 'sh-lang';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function detect() {
    var s = stored();
    if (s === 'es' || s === 'en') return s;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    return String(langs[0] || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  var lang = detect();
  root.lang = lang;

  var originals = null;
  function capture() {
    originals = { text: new Map(), html: new Map(), title: document.title, meta: {} };
    document.querySelectorAll('[data-i18n]').forEach(function (el) { originals.text.set(el, el.textContent); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { originals.html.set(el, el.innerHTML); });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); originals.meta[p[1]] = originals.meta[p[1]] || [];
        originals.meta[p[1]].push({ el: el, attr: p[0], value: el.getAttribute(p[0]) });
      });
    });
    var d = document.querySelector('meta[name="description"]');
    originals.description = d ? d.content : '';
  }

  function apply(next) {
    lang = next;
    root.lang = lang;
    var es = window.I18N_ES || {};
    var useEs = lang === 'es';
    originals.text.forEach(function (en, el) {
      var k = el.getAttribute('data-i18n');
      el.textContent = useEs && es[k] != null ? es[k] : en;
    });
    originals.html.forEach(function (en, el) {
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = useEs && es[k] != null ? es[k] : en;
    });
    Object.keys(originals.meta).forEach(function (k) {
      originals.meta[k].forEach(function (item) {
        item.el.setAttribute(item.attr, useEs && es[k] != null ? es[k] : item.value);
      });
    });
    document.title = useEs && es['meta.title'] ? es['meta.title'] : originals.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.content = useEs && es['meta.description'] ? es['meta.description'] : originals.description;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  document.addEventListener('DOMContentLoaded', function () {
    capture();
    apply(lang);
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = b.getAttribute('data-lang');
        try { localStorage.setItem(KEY, next); } catch (e) { /* private mode */ }
        apply(next);
      });
    });
    root.classList.remove('i18n-pending');
  });

  // Never leave the page hidden if something above fails.
  setTimeout(function () { root.classList.remove('i18n-pending'); }, 1500);

  window.SH_LANG = function () { return lang; };
})();
