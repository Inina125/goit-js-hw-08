import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

let elements = '';
for (const item of galleryItems) {
  elements += `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
}
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', elements);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
