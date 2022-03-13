const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const sectionWelcome = document.querySelector('.section__welcome');

function toggle() {
  burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  sectionWelcome.classList.toggle('active');
}

burgerIcon.addEventListener('click', toggle)

document.querySelectorAll('.nav__link-burger a').forEach(link => {
  link.addEventListener('click', toggle);
});