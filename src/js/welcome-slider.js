const sliderWelcome = document.querySelector('.slider__welcome');
const sliderItems = document.querySelector('.slider__items');
const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const length = document.querySelectorAll('.slider__items img').length;

const sliderNumber = document.querySelector('.slider__number');
const sliderDots = document.querySelectorAll('.slider__dot_welcome');

const firstSlide = document.querySelector('.slider__items img:first-child').cloneNode(false);
const lastSlide = document.querySelector('.slider__items img:last-child').cloneNode(false);

let count = 1;
let width;

sliderItems.prepend(lastSlide);
sliderItems.append(firstSlide);

let images = document.querySelectorAll('.slider__items img');

function init() {
  width = sliderWelcome.clientWidth;
  images.forEach(item => {
    item.style.width = width + 'px';
  });
  sliderItems.style.transform = `translate(-${width * count}px)`;
}

window.addEventListener('resize', () => {
  init();
})

init();

sliderItems.style.transform = `translate(-${width * 1}px)`;
sliderItems.offsetWidth;
sliderItems.classList.add('animated');

function slideRight() {
  changeSlide('right');
}

function slideLeft() {
  changeSlide('left');
}

function slideDots() {
  sliderDots.forEach(e => {
    e.classList.remove('active');
  })
  count > length ? sliderDots[0].classList.add('active') : count == 0 ? sliderDots[length - 1].classList.add('active') : sliderDots[count - 1].classList.add('active');
  count > length ? sliderNumber.innerHTML = 1 : count == 0 ? sliderNumber.innerHTML = 5 : sliderNumber.innerHTML = count;
}

function changeDots() {
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', () => {
      count = i + 1;
      sliderItems.style.transform = `translate(-${width * count}px)`;

      slideDots();
      sliderItems.classList.add('animated');
    })
  }
}

function changeSlide(direction) {
  if (direction == 'right') {
    count++;

    sliderItems.style.transform = `translate(-${width * count}px)`;
    sliderItems.classList.add('animated');
  
    sliderRight.removeEventListener('click', slideRight);
  
    sliderItems.addEventListener('transitionend', () => {
      if (count > length) {
        count = 1;
        sliderItems.classList.remove('animated')
        sliderItems.style.transform = `translate(-${width * count}px)`;
      }
      sliderRight.addEventListener('click', slideRight);
    })
 
  } else {
    count--;

    sliderItems.style.transform = `translate(-${width * count}px)`;
    sliderItems.classList.add('animated');
  
    sliderLeft.removeEventListener('click', slideLeft);
  
    sliderItems.addEventListener('transitionend', () => {
      if (count == 0) {
        count = length;
        sliderItems.classList.remove('animated')
        sliderItems.style.transform = `translate(-${width * count}px)`;
      }
      sliderLeft.addEventListener('click', slideLeft);
    })
  }

  slideDots();
}

sliderRight.addEventListener('click', slideRight);
sliderLeft.addEventListener('click', slideLeft);

changeDots();