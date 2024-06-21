import { userRequest } from './js/pixabay-api.js';
import { galleriesTemplate } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.js-form');
const ulElem = document.querySelector('.js-album-list');
const loader = document.querySelector('.js-loader');
const btnElem = document.querySelector('.js-form-btn');
const album = new SimpleLightbox('.album-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const request = searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  ulElem.innerHTML = '';
  const userSearch = e.target.elements.text.value.trim();
  if (userSearch !== '') {
    showLoader();
    try {
      const data = await userRequest(userSearch);
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
        showLoadMore();
      }
    } catch (err) {
      console.log(err);
    }
    hideLoader();
  }

  searchForm.reset();
});

btnElem.addEventListener('click', async () => {
  console.log('hello');
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showLoadMore() {
  btnElem.classList.remove('btn-hidden');
}

function hideLoadMore() {
  btnElem.classList.add('btn-hidden');
}
