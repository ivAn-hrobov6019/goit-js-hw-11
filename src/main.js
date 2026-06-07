import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements['search-text'].value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a keyword to search!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  console.log(`Валідація пройдена! Запит для слова: "${searchQuery}"`);

  getImagesByQuery(searchQuery)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
