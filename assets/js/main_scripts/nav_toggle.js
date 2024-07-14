document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');

    burgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
