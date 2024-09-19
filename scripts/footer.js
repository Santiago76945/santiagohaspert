document.addEventListener('DOMContentLoaded', () => {
    // Redirigir al hacer clic en el ícono de Instagram
    document.querySelector('.fab.fa-instagram').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://instagram.com/santiagohaspert';
    });

    // Redirigir al hacer clic en el ícono de YouTube
    document.querySelector('.fab.fa-youtube').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.youtube.com/santiagohaspert';
    });

    // Redirigir al hacer clic en el ícono de WhatsApp
    document.querySelector('.fab.fa-whatsapp').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://wa.me/message/RDMLM5WTKRAIO1?src=qr';
    });
});
