import {createElement} from '../utils/utils.js';

const SORT_BY = ['day', 'event', 'time', 'price', 'offer'];

function createSort () {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${SORT_BY.map((el) => (`<div class="trip-sort__item  trip-sort__item--${el}">
  <input id="sort-${el}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${el}">
  <label class="trip-sort__btn" for="sort-${el}">${el}</label>
  </div>`)).join('')}
  </form>`;
}

class SortBy {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSort();
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

export {SortBy};
