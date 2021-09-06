import {createElement} from '../utils/utils.js';

function createTripPrice () {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>`;
}

class TripPrice {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripPrice();
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

export {createTripPrice, TripPrice};
