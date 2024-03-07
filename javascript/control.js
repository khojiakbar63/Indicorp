// Menu
var toggleButton = document.getElementById('toggle');
var cornerMenu = document.getElementById('corner_menu');
var jsMenu = document.getElementsByClassName('js__menu');

cornerMenu.addEventListener('click', function(){
   jsMenu.classList.toggle('menu__show')
})