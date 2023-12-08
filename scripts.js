const hamburger = document.querySelector(".toggle_btn");
const navMenu = document.querySelector(".navbar-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}