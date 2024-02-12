const renderFunctions = {
  renderMarkup(markup) {
    document.querySelector('.gallery').innerHTML = markup;
  },

  removeMarkup() {
    document.querySelector('.gallery').innerHTML = '';
  },

  setLoader() {
    document
      .querySelector('.gallery')
      .insertAdjacentHTML('beforebegin', `<span class="loader"></span>`);
  },

  removeLoader() {
    document.querySelector('.loader').remove();
  },
};

export default renderFunctions;
