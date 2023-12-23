const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.hamburger_menu');
const navLinks = document.querySelectorAll('.hamburger_menu .nav-link');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobile_menu.classList.remove('is-active');
    menu_btn.classList.remove('is-active');
  });
});