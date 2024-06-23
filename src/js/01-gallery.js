import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

document.querySelector('.gallery').insertAdjacentHTML('afterbegin', galleryMarkup(galleryItems));

function galleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
    <a class="gallery-link" href="${original}">
        <img width=360
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>
    `
    )
    .join('');
}

new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 300,
  overlayOpacity: 0.9,
});
