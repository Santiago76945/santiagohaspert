//solicitar-consulta.js

document.addEventListener('DOMContentLoaded', () => {
    // Alerta para "Consulta Presencial"
    document.querySelector('#link-presencial').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Agradecemos el interés en nuestro servicio. Estamos trabajando por ofrecer consultas jurídicas presenciales a fines de este año. Por favor, no dude en volver pronto.');
    });

    // Alerta para "Consulta Online"
    const btnSolicitarOnline = document.querySelector('#btn-solicitar-online');
    if (btnSolicitarOnline) {
        btnSolicitarOnline.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Muchas gracias por su interés en nuestros servicios. Actualmente este servicio no se encuentra disponible, pero estamos trabajando en traerlo de vuelta lo antes posible.');
        });
    }

    // Funcionalidad para enviar el formulario por correo
    document.querySelector('#btn-contactar').addEventListener('click', (event) => {
        event.preventDefault();

        // Obtener los valores del formulario
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const message = document.getElementById('form-message').value.trim();

        // Validar que todos los campos requeridos estén completos
        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos obligatorios: Nombre y Apellido, Correo Electrónico y Mensaje.');
            return;
        }

        // Construir el cuerpo del correo
        const subject = `Consulta jurídica de ${name}`;
        const body = `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`;
        const mailtoLink = `mailto:haspertyasociados@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Abrir el cliente de correo con los datos completados
        window.location.href = mailtoLink;
    });
});

