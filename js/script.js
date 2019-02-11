'use-strict';

function toggleMenu() {
  document.querySelector('.mobile-menu')
      .classList
      .toggle('show');
}

document.querySelector('.hamburger')
    .addEventListener('click', function() {
      toggleMenu();
});