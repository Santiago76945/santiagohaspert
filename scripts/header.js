// header.js

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const closeIcon = document.querySelector('.close-icon');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        closeIcon.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
    });

    closeIcon.addEventListener('click', function () {
        navMenu.classList.remove('active');
        closeIcon.style.display = 'none';
    });
});
