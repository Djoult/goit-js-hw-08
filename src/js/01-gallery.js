// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`
  )
  .join('');
let lightbox = new SimpleLightbox('.gallery a', {
  // navText: ['&#11178;', '&#11179;'],
  navText: ['&#8656;', '&#8658;'],
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionClass: '',
  //   closeText: "&#10015;", краще не розкоментовувати :)
  closeText: '&#10803',
  showCounter: false,
});
