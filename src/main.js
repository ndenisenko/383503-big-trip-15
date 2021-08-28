import { createEditionForm } from './view/form-of-edition.js';
import { createFilters } from './view/filters.js';
import { createNavigation } from './view/menu.js';
import { createPoint } from './view/route-point.js';
import { createRouteInfo } from './view/route-info.js';
import { createSort } from './view/sort.js';
import { createTripPrice } from './view/trip-price.js';
import { generatePoint } from './mock/point.js';

const POINT_COUNT = 15;

const render = (container, layout, position) => {
  container.insertAdjacentHTML(position, layout);
};

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const tripMain = document.querySelector('.trip-main');
render(tripMain, createRouteInfo(points[0]), 'afterbegin');
const tripInfo = document.querySelector('.trip-info');
render(tripInfo, createTripPrice(), 'beforeend');

const tripNavigation = document.querySelector('.trip-controls__navigation');
render(tripNavigation, createNavigation(), 'beforeend');

const filters = document.querySelector('.trip-controls__filters');
render(filters, createFilters(), 'beforeend');

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, createSort(), 'beforeend');

const tripSort = document.querySelector('.trip-sort');
render(tripSort, createEditionForm(points[0]), 'afterend');

const eventEdit = document.querySelector('.event--edit');

for (let i = 1; i < POINT_COUNT; i++) {
  render(eventEdit, createPoint(points[i]), 'afterend');
}
