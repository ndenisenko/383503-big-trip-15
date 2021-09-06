import {createElement} from '../utils/utils.js';

function createNavigation () {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;
}

class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNavigation();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {SiteMenu};
