function galleryTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` <li class="album-item">
            <a class="album-link" href="${largeImageURL}">
            <img
              class="album-img"
              src="${webformatURL}"
              alt="${tags}"
            />
            <ul class="statistics-list">
              <li class="statistics-item text-marg-1">
                <p class="statistics-text">Likes</p>
                <p>${likes}</p>
              </li>
              <li class="statistics-item text-marg-2">
                <p class="statistics-text">Views</p>
                <p>${views}</p>
              </li>
              <li class="statistics-item text-marg-3">
                <p class="statistics-text">Comments</p>
                <p>${comments}</p>
              </li>
              <li class="statistics-item">
                <p class="statistics-text">Downloads</p>
                <p>${downloads}</p>
              </li>
            </ul>
            </a>
          </li>`;
}
export function galleriesTemplate(arr) {
  return arr.map(galleryTemplate).join('\n');
}
