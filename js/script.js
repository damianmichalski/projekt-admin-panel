'use-strict';

function toggleMenu(visible) {
  document.querySelector('.mobile-menu')
      .classList
      .toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function() {
  toggleMenu();
});