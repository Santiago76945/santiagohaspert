// scripts/centro-de-descargas.js

(function () {
    // Configuración
    const whatsappNumber = '5493437556773'; // sin espacios ni símbolos
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    const contactLabel = 'Contactar';     // Renombrada para evitar duplicados

    // Crea y añade el botón flotante
    function initFloatingContact() {
        if (document.querySelector('.floating-contact')) return; // ya existe

        const a = document.createElement('a');
        a.href = whatsappURL;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'floating-contact';

        // Icono (requiere Font Awesome)
        const icon = document.createElement('i');
        icon.className = 'fab fa-whatsapp floating-contact__icon';
        a.appendChild(icon);

        // Texto
        a.appendChild(document.createTextNode(contactLabel));

        document.body.appendChild(a);
    }

    document.addEventListener('DOMContentLoaded', initFloatingContact);
})();
