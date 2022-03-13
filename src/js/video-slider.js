import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.js"

let videoSlider = tns({
  mode: 'carousel',
  container: '.video__items',
  items: 2,
  gutter: 20,
  prevButton: '.slider__left_video',
  nextButton: '.slider__right_video',
  navContainer: '.slider__dots_video',
  navAsThumbnails: true,
  speed: 800,
  
  responsive: {
    769: {
      gutter: 42,
      items: 3,
    },
  }
});