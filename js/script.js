var headerMenu = document.querySelector(".page-header");
var btn = document.querySelector(".main-nav");
var menu = document.querySelector(".main-nav__items");
var close = document.querySelector(".page-header__toggle");

headerMenu.classList.remove("no-js");

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("menu-open");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.toggle("page-header__toggle--close");
});
