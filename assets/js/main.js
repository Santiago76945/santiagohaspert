(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal on scroll, with a small stagger for siblings entering together.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      var i = 0;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.style.setProperty('--d', (i++ * 0.08) + 's');
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Nav background once the page scrolls.
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Spotlight that follows the pointer on project cards.
  document.querySelectorAll('.project').forEach(function (card) {
    card.addEventListener('pointermove', function (ev) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
      card.style.setProperty('--my', (ev.clientY - r.top) + 'px');
    });
  });

  // Gentle parallax tilt on the hero portrait (pointer devices only).
  var visual = document.querySelector('.hero-visual');
  if (visual && !reduce && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', function (ev) {
      var x = ev.clientX / window.innerWidth - 0.5;
      var y = ev.clientY / window.innerHeight - 0.5;
      visual.style.transform = 'perspective(900px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg)';
    }, { passive: true });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
