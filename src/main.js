// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';

// const BASE_URL = 'https://pixabay.com';
// const END_POINT = '/api/';
// const API_KEY = '42307570-a64cb029cc8427df0f0b3ddcd';

// function getImages() {
//     const url = 'https://pixabay.com/api/?key=42307570-a64cb029cc8427df0f0b3ddcd&;
//     return fetch(url).then(res => res.json());
//   }

const formSubmit = document.querySelector('.form');
formSubmit.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const searchText = event.target.elements.searchInput.value;
  if (searchText) {
    const url = `https://pixabay.com/api/?key=42307570-a64cb029cc8427df0f0b3ddcd&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true`;
    fetch(url)
      .then(response => response.json())
      .then(array => {
        // const responseArray = array;
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
        document.querySelector('.images-list').innerHTML = markup;
      });
  }
}
