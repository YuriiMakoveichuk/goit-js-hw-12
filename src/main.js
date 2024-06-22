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

let userSearch;
let newPage;
let maxPage;

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  ulElem.innerHTML = '';
  userSearch = e.target.elements.text.value.trim();
  newPage = 1;
  btnHideLoadMore();
  if (userSearch !== '') {
    showLoader();
    try {
      btnHideLoadMore();
      const data = await userRequest(userSearch, newPage);
      maxPage = Math.ceil(data.totalHits / data.hits.length);
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
        updateBtnLoadMore();
      }
    } catch (err) {
      console.log(err);
    }
    hideLoader();
  } else {
    btnHideLoadMore();
  }

  searchForm.reset();
});

btnElem.addEventListener('click', async () => {
  showLoader();
  newPage += 1;
  btnHideLoadMore();
  try {
    const data = await userRequest(userSearch, newPage);
    ulElem.insertAdjacentHTML('beforeend', galleriesTemplate(data.hits));
    scrollPage();
  } catch (err) {
    console.log(err);
  }
  hideLoader();
  updateBtnLoadMore();
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function updateBtnLoadMore() {
  if (newPage < maxPage) {
    btnShowLoadMore();
  } else {
    btnHideLoadMore();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      timeout: 3000,
    });
  }
}

function btnShowLoadMore() {
  btnElem.classList.remove('btn-hidden');
}

function btnHideLoadMore() {
  btnElem.classList.add('btn-hidden');
}

function scrollPage() {
  const liElem = ulElem.children[0];
  const heightCart = liElem.getBoundingClientRect().height;
  window.scrollBy({
    top: heightCart * 3,
    behavior: 'smooth',
  });
}
