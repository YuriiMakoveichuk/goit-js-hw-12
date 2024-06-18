import { userRequest } from './js/pixabay-api.js';
import { galleriesTemplate } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.js-form');
const ulElem = document.querySelector('.js-album-list');
const loader = document.querySelector('.js-loader');
const album = new SimpleLightbox('.album-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const request = searchForm.addEventListener('submit', e => {
  e.preventDefault();
  ulElem.innerHTML = '';
  const userSearch = e.target.elements.text.value.trim();
  if (userSearch !== '') {
    showLoader();
    userRequest(userSearch)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 2000,
          });
        } else {
          ulElem.innerHTML = galleriesTemplate(data.hits);
          album.refresh();
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        hideLoader();
      });
  }

  searchForm.reset();
});
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
