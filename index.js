const hamburger = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.close_hamburger');
const hamburgerList = document.querySelectorAll('.hamburger_list');
const sideNav = document.querySelector('.side_nav');

hamburger.addEventListener('click', () => {
  sideNav.classList.add('visible');
});

closeHamburger.addEventListener('click', () => {
  sideNav.classList.remove('visible');
});

hamburgerList.forEach((list) => list.addEventListener('click', () => {
  sideNav.classList.remove('visible');
}));