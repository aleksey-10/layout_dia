'use strict';

const nav = document.querySelector('.nav-mobile');
const burger = document.querySelector('.header__burger');
const times = nav.querySelector('.nav-mobile__times');

burger.onclick = function() {
  toggleMenu();
};

nav.addEventListener('click', function(e) {
  if (e.target === times || e.target.classList.contains('nav-mobile__link')) {
    toggleMenu(0);
  }
});

function toggleMenu(val = 1) {
  nav.style.opacity = val;

  val ? nav.style.zIndex = 1
    : nav.addEventListener('transitionend', function toggleZIndex() {
      nav.style.zIndex = -1;
      nav.removeEventListener('transitionend', toggleZIndex);
    });
}
