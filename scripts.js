const toggleBtn = document.querySelector('.toggle_btn') 
const toggleBtnIcon = document.querySelector('.toggle_btn img')
const dropDownMenu = document.querySelector('.hamburger_menu')

toggleBtn.onclick = function () {
 dropDownMenu.classList.toggle('open')
 const isOpen = dropDownMenu.classList.contains('open')

 toggleBtnIcon.classList = isOpen
