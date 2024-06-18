export function userRequest(userSearch) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const param = new URLSearchParams({
    key: '44363608-aeb5e859d1804b8d255aa00c3',
    q: `${userSearch}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${param}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}
