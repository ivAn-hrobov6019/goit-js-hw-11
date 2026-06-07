import axios from 'axios';

const API_KEY = '56206542-d30ce4b763db5e6ca8fe7f09b';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}
