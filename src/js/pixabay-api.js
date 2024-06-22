import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44363608-aeb5e859d1804b8d255aa00c3',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export async function userRequest(userSearch, newPage) {
  try {
    const res = await axios.get('', {
      params: { q: userSearch, page: newPage },
    });
    return res.data;
  } catch (err) {
    console.log('server error', err);
  }
}
