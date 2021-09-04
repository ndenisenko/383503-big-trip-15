import {EditionForm} from './view/form-of-edition.js';
import {Filters} from './view/filters.js';
import {SiteMenu} from './view/menu.js';
import {Point} from './view/route-point.js';
import {createRouteInfo} from './view/route-info.js';
import {SortBy} from './view/sort.js';
import {createTripPrice} from './view/trip-price.js';
import {generatePoint} from './mock/point.js';
import {renderTemplate, renderElement, RenderPosition} from './utils/utils.js';

const POINT_COUNT = 15;

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const tripMain = document.querySelector('.trip-main');
renderTemplate(tripMain, createRouteInfo(points[0]), 'afterbegin');
const tripInfo = document.querySelector('.trip-info');
renderTemplate(tripInfo, createTripPrice(), 'beforeend');

const tripNavigation = document.querySelector('.trip-controls__navigation');

renderElement(tripNavigation, new SiteMenu().getElement(), RenderPosition.BEFOREEND);

const filters = document.querySelector('.trip-controls__filters');
renderElement(filters, new Filters().getElement(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector('.trip-events');
renderElement(tripEvents, new SortBy().getElement(), RenderPosition.AFTERBEGIN);

const contentList = document.querySelector('.trip-events__list');

function renderPoint (pointList, point) {
  const pointComponent = new Point(point);
  const pointEditComponent = new EditionForm(point);

  function replacePointToForm () {
    pointList.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  }

  function replaceFormToPoint () {
    pointList.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  }
  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', replacePointToForm);

  pointEditComponent.getElement().addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
  });

  pointEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', replaceFormToPoint);

  renderElement(pointList, pointComponent.getElement(), RenderPosition.BEFOREEND);
}

for (let i = 1; i < POINT_COUNT; i++) {
  renderPoint(contentList, points[i]);
}
