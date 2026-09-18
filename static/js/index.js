document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var isActive = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', String(isActive));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }
});