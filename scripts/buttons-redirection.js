//buttons-redirection.js

document.addEventListener('DOMContentLoaded', () => {
    // Redireccionar al hacer clic en los enlaces del menú de navegación
    document.getElementById('consulta-nav').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/solicitar-consulta.html';
    });

    document.getElementById('academico-nav').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/contenido-academico.html';
    });

    document.getElementById('tienda-nav').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/tienda.html';
    });

    document.getElementById('about-nav').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/about-me.html';
    });

    // Redireccionar al hacer clic en los botones de la sección de servicios
    document.getElementById('consulta-button').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/solicitar-consulta.html';
    });

    document.getElementById('academico-button').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/contenido-academico.html';
    });

    // Mostrar alerta al hacer clic en "Solicitar clases particulares"
    document.getElementById('clases-button').addEventListener('click', () => {
        alert('Las clases particulares no están disponibles en este momento. Estamos trabajando para reanudar este servicio lo antes posible. Por favor, suscríbase a nuestro newsletter para ser el primero en enterarse cuando estén disponibles nuevamente.');
    });

    // Redireccionar al hacer clic en el encabezado para ir a la página principal
    document.getElementById('header-home').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/index.html';
    });
});


