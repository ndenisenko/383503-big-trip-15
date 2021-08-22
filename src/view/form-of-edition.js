import {ucFirst} from '../utils.js';
import {OFFERS} from '../mock/offers.js';
import {CITIES} from '../mock/point.js';
import dayjs from 'dayjs';

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

function createEventTypeList () {
  return TYPES.map((element) => (`<div class="event__type-item">
  <input id="event-type-${element}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${element}">
  <label class="event__type-label  event__type-label--${element}" for="event-type-${element}-1">${ucFirst(element)}</label>
  </div>`)).join('');
}

const getAvailableOffers = (type) => {
  const offersAll = [];
  Object.values(OFFERS).forEach((el) => {
    el.type === type ? el.offers.forEach((element) => offersAll.push(element.title)) : '';
  });
  const offersAllMarkup = offersAll.map((el) => (`<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage">
  <label class="event__offer-label" for="event-offer-luggage-1">
    <span class="event__offer-title">${el}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">50</span>
  </label>
  </div>`)).join('');

  return offersAllMarkup;
};

function getCitiesList () {
  const citiesList = CITIES.map((el) => el = `<option value=${el}></option>`).join('');
  return `<datalist id="destination-list-1">
  ${citiesList}
  </datalist>`;
}

export const createEditionForm = (point) => {
  const {
    type = 'taxi',
    city = 'Paris',
    offers = {},
    basePrice = 0,
    dateFrom = dayjs(),
    dateTo = dayjs(),
    id = 0,
    isFavorite = false,
    destination = {},
  } = point;

  console.log(offers);

  return `<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${createEventTypeList()}
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${ucFirst(type)}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${city} list="destination-list-1">
      ${getCitiesList()}
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${dayjs(dateFrom).format('DD/MM/YYTH:MM')}>
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${dayjs(dateTo).format('DD/MM/YYTH:MM')}>
    </div>
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${basePrice}>
    </div>
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${getAvailableOffers(type)}
      </div>
    </section>
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>
    </section>
  </section>
</form>`;
};
