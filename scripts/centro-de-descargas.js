//centro-de-descargas.js

document.addEventListener('DOMContentLoaded', () => {
    // Redireccionar al hacer clic en "DIP Podcast"
    document.getElementById('download-dip-podcast').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/scl/fi/zuy7lomev9o0yxds627uj/Resumen-de-Derecho-Internacional-Publico-Argentina-2020.mp3?rlkey=6vmx664vehzm7mvc3ll510q4v&st=gvivnpur&dl=0';
    });

    // Redireccionar al hacer clic en "DPP Podcast"
    document.getElementById('download-dpp-podcast').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/scl/fi/f42b3ftxdeo4p3ydd0diw/Resumen-Derecho-Procesal-Penal-Argentino-C-rdoba-2019.mp3?rlkey=h0tlyft6v15vkeyaeptghauap&st=uskgbi8c&dl=0';
    });

    // Redireccionar al hacer clic en "DL Podcast"
    document.getElementById('download-dl-podcast').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/scl/fi/ytj8zvf0o57692zyrpo5i/DL-Podcast.mp3?rlkey=39ugit29scgejnz67dwhz4ngk&st=7oc16oss&dl=0';
    });

    // Redireccionar al hacer clic en "DIP eBook gratuito"
    document.getElementById('download-dip-ebook-free').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/scl/fi/t8v01v6n2kudos2vb85yb/DIP-Lite-1.1.pdf?rlkey=y0dy6zk4u2t3rcoun11i0jzu1&st=4iyslr71&dl=0';
    });

    // Redireccionar al hacer clic en "DIP eBook de pago"
    document.getElementById('download-dip-ebook-paid').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/tienda.html';
    });

    // Redireccionar al hacer clic en "DL eBook gratuito"
    document.getElementById('download-dl-ebook-free').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://www.dropbox.com/scl/fi/jsihlw5zm9e0370fion42/DL-Lite-1.1.pdf?rlkey=7slmv6xpf3whzpqsmpwgb878x&st=0j7vca8m&dl=0';
    });

    // Redireccionar al hacer clic en "DL eBook de pago"
    document.getElementById('download-dl-ebook-paid').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/pages/tienda.html';
    });
});
