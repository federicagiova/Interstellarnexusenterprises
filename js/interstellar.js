// JavaScript para el menu hamburguesa

document.addEventListener("DOMContentLoaded", function() {
    const menuHamburger = document.querySelector(".menu_hamburger");
    const menuCabecera = document.querySelector(".menu_cabecera");

    menuHamburger.addEventListener("click", function() {
        menuCabecera.classList.toggle("active");
    });
});
