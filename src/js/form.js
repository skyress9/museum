const btnTickets = document.querySelector('.btn__tickets');
const btnClose = document.querySelector('.btn__close')
const form = document.querySelector('.form');
const overlay = document.querySelector('.overlay');


btnTickets.addEventListener('click', () => {
  form.style.left = '50%';
  form.style.visibility = 'visible';
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
})

btnClose.addEventListener('click', () => {
  form.style.left = '-50%';
  form.style.visibility = 'hidden';
  overlay.style.visibility = 'hidden';
  overlay.style.opacity = '0';
})

overlay.addEventListener('click', () => {
  form.style.left = '-50%';
  form.style.visibility = 'hidden';
  overlay.style.visibility = 'hidden';
  overlay.style.opacity = '0';
})