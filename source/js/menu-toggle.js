window.onload = toggleMenu();

function toggleMenu(){
  document.getElementById("menu-button").classList.toggle("menu__button--opened");
  document.getElementById("menu-list").classList.toggle("menu__list--open");
}
