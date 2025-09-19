// scripts/buttons-redirection.js

document.addEventListener('DOMContentLoaded', () => {
    /** Helper: agrega listener solo si el elemento existe */
    function safeAddListener(id, event, handler) {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, handler);
    }

    /* ========= MENÚ DE NAVEGACIÓN ========= */
    safeAddListener('consulta-nav', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/solicitar-consulta.html';
    });

    safeAddListener('academico-nav', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/contenido-academico.html';
    });

    safeAddListener('tienda-nav', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/tienda.html';
    });

    safeAddListener('servicios-nav', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/servicios.html';
    });

    safeAddListener('about-nav', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/about-me.html';
    });

    // (Opcional) si tenés un item "Contacto" en el header/footer con este id
    safeAddListener('contact-form-nav', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/contact-form.html';
    });

    /* ========= BOTONES PRINCIPALES DEL INDEX ========= */
    safeAddListener('consulta-button', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/solicitar-consulta.html';
    });

    safeAddListener('academico-button', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/contenido-academico.html';
    });

    safeAddListener('services-button', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/servicios.html';
    });

    /* Clases particulares (alerta) */
    safeAddListener('clases-button', 'click', () => {
        alert(
            'Las clases particulares no están disponibles en este momento. ' +
            'Suscribite a nuestro newsletter para enterarte cuando se reanuden.'
        );
    });

    /* Encabezado → Home */
    safeAddListener('header-home', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/index.html';
    });

    /* Otros botones del index */
    safeAddListener('academic-content', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/contenido-academico.html';
    });

    safeAddListener('book-consult', 'click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/solicitar-consulta.html';
    });

    /* ========= IMPORTANTE =========
     * Eliminado el handler global que forzaba TODOS los .service-button a /pages/contact-form.html
     * Ahora cada <a> respeta su href natural:
     *    - "Más información" → va a su página específica (p.ej. /pages/derecho-laboral.html)
     *    - "Consultar"      → va a /pages/solicitar-consulta.html (como ya está en el HTML)
     *
     * Si querés forzar que un botón puntual vaya a Contacto, poné data-go="contact" en ese <a> y descomentá el bloque siguiente.
     */

    /*
    document.querySelectorAll('a[data-go="contact"]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/pages/contact-form.html';
      });
    });
    */
});
