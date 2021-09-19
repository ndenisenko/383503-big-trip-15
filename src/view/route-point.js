import {ucFirst} from '../utils/uc-first.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import {AbstractView} from './abstract.js';

const BLANK_POINT = {
  type: '',
  city: '',
  offers: {},
  basePrice: 0,
  dateFrom: dayjs(),
  dateTo: dayjs(),
  isFavorite: false,
};

function createPointOffer (offers) {
  let result = '';

  if (Object.keys(offers).length !== 0) {
    const map = new Map(Object.entries(offers));
    const offersArray = map.get('offers');

    for (const offer of offersArray) {
      result += `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
      </li>`;
    }
  } else {
    result = '';
  }

  return result;
}

function getDiff(firstDate, secondDate) {
  dayjs.extend(duration);
  let result = '';
  const diff = dayjs.duration(dayjs(secondDate).diff(dayjs(firstDate)));

  if (diff.days()) {
    result = diff.days() < 10 ? `0${diff.days()}D` : `${diff.days()}D`;
  }
  if (diff.hours()) {
    result += diff.hours() < 10 ? ` 0${diff.hours()}H` : ` ${diff.hours()}H`;
  }
  if (diff.minutes()) {
    result += diff.minutes() < 10 ? ` 0${diff.minutes()}M` : ` ${diff.minutes()}M`;
  }
  return result;
}

function createPoint (point) {
  const {
    type = '',
    city = '',
    offers = {},
    basePrice = 0,
    dateFrom = dayjs(),
    dateTo = dayjs(),
    isFavorite = false,
  } = point;

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-19">${dayjs(dateFrom).format('MMM DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${ucFirst(city)}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs(dateFrom).format('YYYY-MM-DDTHH:MM')}">${dayjs(dateFrom).format('hh:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs(dateTo).format('YYYY-MM-DDTHH:MM')}">${dayjs(dateTo).format('hh:mm')}</time>
        </p>
        <p class="event__duration">${getDiff(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${createPointOffer(offers)}
      </ul>
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
}

class PointView extends AbstractView {
  constructor(point = BLANK_POINT) {
    super();
    this._point = point;

    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createPoint(this._point);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector('.event__favorite-btn').addEventListener('click', this._favoriteClickHandler);
  }
}

export {PointView, createPoint};
