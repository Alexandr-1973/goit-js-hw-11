// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import svgError from '/img/bi_x-octagon.svg';

import internetServerInfo from './js/pixabay-api';

import renderHtml from './js/render-functions';

const formSubmit = document.querySelector('.form');
formSubmit.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  document.querySelector('.gallery').innerHTML = '';
  const searchText = event.target.elements.searchInput.value;
  formSubmit.reset();

  if (searchText) {
    document
      .querySelector('.gallery')
      .insertAdjacentHTML('beforebegin', `<span class="loader"></span>`);

    const { BASE_URL, END_POINT, API_KEY, constParameters } =
      internetServerInfo;
    const url = `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${searchText}${constParameters}`;

    fetch(url)
      .then(response => response.json())
      .then(array => {
        if (array.hits.length === 0) {
          iziToast.error({
            timeout: 3000,
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            maxWidth: '432px',
            messageColor: '#fff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            backgroundColor: '#ef4040',
            position: 'topRight',
            titleColor: '#fff',
            titleSize: '16px',
            titleLineHeight: '1.5',
            iconUrl: svgError,
          });
          return;
        } else {
          const markup = array.hits
            .map(image => {
              const {
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
              } = image;
              return `<li class="gallery-item">
<a class="gallery-link" href=${largeImageURL}>
<img class="gallery-image" src=${webformatURL} alt="${tags}" />
</a><div class="options-div"><div class="item-div"><h4 class="item-div-name">Likes</h4>
  <p class="item-div-text">${likes}</p></div><div class="item-div"><h4 class="item-div-name">Views</h4>
  <p class="item-div-text">${views}</p></div><div class="item-div"><h4 class="item-div-name">Comments</h4>
  <p class="item-div-text">${comments}</p></div><div class="item-div"><h4 class="item-div-name">Downloads</h4>
  <p class="item-div-text">${downloads}</p></div></div>
</li>`;
            })
            .join('');

          renderHtml(markup);

          var lightbox = new SimpleLightbox('.gallery a', {
            captionPosition: 'bottom',
            captionsData: 'alt',
            className: 'modal',
            /* options */
          });
          lightbox.refresh();
        }
      })
      .catch(() => {
        console.log('Mistake from server');
      });

    setTimeout(() => {
      document.querySelector('.loader').remove();
    }, 1000);
  }
}
