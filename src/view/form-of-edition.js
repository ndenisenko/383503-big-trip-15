import {ucFirst} from '../utils/uc-first.js';
import {OFFERS} from '../mock/offers.js';
import {CITIES} from '../mock/point.js';
import dayjs from 'dayjs';
import {Abstract} from './abstract.js';

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const BLANK_POINT = {
  type: '',
  city: '',
  offers: {},
  basePrice: 0,
  dateFrom: dayjs(),
  dateTo: dayjs(),
  isFavorite: false,
};

const getAvailableOffers = (type) => {
  const offersAll = [];

  Object.values(OFFERS).forEach((el) => {
    el.type === type ? el.offers.forEach((element) => offersAll.push(element.title)) : '';
  });

  return offersAll.map((element) => (`<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage">
  <label class="event__offer-label" for="event-offer-luggage-1">
    <span class="event__offer-title">${element}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">50</span>
  </label>
  </div>`)).join('');
};

function createEditionForm (point) {
  const {
    type = '',
    city = '',
    basePrice = 0,
    dateFrom = dayjs(),
    dateTo = dayjs(),
    destination = {},
  } = point;

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
          ${TYPES.map((element) => (`<div class="event__type-item">
          <input id="event-type-${element}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${element}">
          <label class="event__type-label  event__type-label--${element}" for="event-type-${element}-1">${ucFirst(element)}</label>
          </div>`)).join('')}
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${ucFirst(type)}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${city} list="destination-list-1">
      ${`<datalist id="destination-list-1">
      ${CITIES.map((element) => element = `<option value=${element}></option>`).join('')}
      </datalist>`}
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=  ${dayjs(dateFrom).format('DD/MM/YY\xA0HH:MM')}>
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${dayjs(dateTo).format('DD/MM/YY\xA0HH:MM')}>
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
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${destination.photos.length !== 0 ? destination.photos.map((element) => `<img class="event__photo" src=${element} alt="Event photo">`).join('') : ''}
      </div>
    </div>
  </section>
</form>`;
}

class EditionForm extends Abstract {
  constructor(point = BLANK_POINT) {
    super();
    this._point = point;

    this._saveClickHandler = this._saveClickHandler.bind(this);
  }

  _saveClickHandler(evt) {
    evt.preventDefault();
    this._callback.saveClick();
  }

  setSaveClickHanlder(callback) {
    this._callback.saveClick = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._saveClickHandler);
  }

  setSubmitClickHandler(callback) {
    this._callback.saveClick = callback;
    this.getElement().addEventListener('submit', this._saveClickHandler);
  }

  setResetClickHandler(callback) {
    this._callback.saveClick = callback;
    this.getElement().addEventListener('reset', this._saveClickHandler);
  }

  getTemplate() {
    return createEditionForm(this._point);
  }
}

export {EditionForm};
