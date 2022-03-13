const galleryInner = document.querySelector('.gallery__inner');

let arr2 = ['<img class="gallery__img" src="assets/img/gallery/galery1.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery10.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery11.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery12.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery13.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery14.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery15.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery2.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery3.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery4.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery5.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery6.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery7.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery8.webp" alt="image">', '<img class="gallery__img" src="assets/img/gallery/galery9.webp" alt="image">'];

shuffle(arr2);

arr2.map(e => {
  galleryInner.innerHTML = galleryInner.innerHTML + e;
})


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showGalleryImages() {
  const galleryImages = document.querySelectorAll('.gallery__img');

  window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset;
    galleryImages.forEach(e => {
      let height = e.offsetHeight * 1.4;
      let coords = getCoords(e).top - height;
      if (pageY >= coords) e.classList.add('active');
      else e.classList.remove('active');
    })
  })

  function getCoords(elem) { 
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  
  }
}

showGalleryImages()