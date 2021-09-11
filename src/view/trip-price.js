import {Abstract} from './abstract.js';

function createTripPrice () {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>`;
}

class TripPrice extends Abstract {
  getTemplate() {
    return createTripPrice();
  }
}

export {createTripPrice, TripPrice};
