import { createEditionForm } from './view/form-of-edition.js';
import { createFilters } from './view/filters.js';
import { creationForm } from './view/form-of-creation.js';
import { createNavigation } from './view/menu.js';
import { createPoint } from './view/route-point.js';
import { createRouteInfo } from './view/route-info.js';
import { createSort } from './view/sort.js';
import { createTripPrice } from './view/trip-price.js';

const render = (container, layout, position) => {
  container.insertAdjacentHTML(position, layout);
};

const tripMain = document.querySelector('.trip-main');
render(tripMain, createRouteInfo(), 'afterbegin');

const tripInfo = document.querySelector('.trip-info');
render(tripInfo, createTripPrice(), 'beforeend');

const tripNavigation = document.querySelector('.trip-controls__navigation');
render(tripNavigation, createNavigation(), 'beforeend');

const filters = document.querySelector('.trip-controls__filters');
render(filters, createFilters(), 'beforeend');

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, createSort(), 'beforeend');

const tripSort = document.querySelector('.trip-sort');
render(tripSort, createEditionForm(), 'afterend');

const eventEdit = document.querySelector('.event--edit');
render(eventEdit, createPoint(), 'afterend');

const eventDestination = document.querySelector('.event__section--destination');
render(eventDestination, creationForm(), 'afterend');
