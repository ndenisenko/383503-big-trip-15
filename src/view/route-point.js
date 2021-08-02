export const createPoint = () => (
  `<ul class="trip-events__list">
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-19">MAR 19</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
      </div>
      <h3 class="event__title">Drive Geneva</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-19T10:00">16:00</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-19T11:00">17:00</time>
        </p>
        <p class="event__duration">01H</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">20</span>
      </p>
      <button class="event__favorite-btn" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>

  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-19">MAR 19</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
      </div>
      <h3 class="event__title">Flight Geneva</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-19T18:00">18:00</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-19T19:00">19:00</time>
        </p>
        <p class="event__duration">01H</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">20</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Add luggage</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">30</span>
        </li>
        <li class="event__offer">
          <span class="event__offer-title">Switch to comfort</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">100</span>
        </li>
      </ul>
      <button class="event__favorite-btn" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>

  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-20">MAR 20</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
      </div>
      <h3 class="event__title">Drive Geneva</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-20T08:25">08:25</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-20T09:25">09:25</time>
        </p>
        <p class="event__duration">01H</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">20</span>
      </p>
      <button class="event__favorite-btn" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
</ul>`
);
