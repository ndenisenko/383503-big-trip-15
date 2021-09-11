import {EditionForm} from './view/form-of-edition.js';
import {Filters} from './view/filters.js';
import {SiteMenu} from './view/menu.js';
import {Point} from './view/route-point.js';
import {RouteInfo} from './view/route-info.js';
import {SortBy} from './view/sort.js';
import {TripPrice} from './view/trip-price.js';
import {generatePoint} from './mock/point.js';
import {render, RenderPosition} from './utils/render.js';

const POINT_COUNT = 15;

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const tripMain = document.querySelector('.trip-main');
render(tripMain, new RouteInfo().getElement(), RenderPosition.AFTERBEGIN);

const tripInfo = document.querySelector('.trip-info');
render(tripInfo, new TripPrice().getElement(), RenderPosition.BEFOREEND);

const tripNavigation = document.querySelector('.trip-controls__navigation');

render(tripNavigation, new SiteMenu().getElement(), RenderPosition.BEFOREEND);

const filters = document.querySelector('.trip-controls__filters');
render(filters, new Filters().getElement(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, new SortBy().getElement(), RenderPosition.AFTERBEGIN);

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

  pointComponent.setEditClickHandler(() => {
    replacePointToForm();
  });

  pointEditComponent.setSubmitClickHandler(() => {
    replaceFormToPoint('submit');
  });

  pointEditComponent.setResetClickHandler(() => {
    replaceFormToPoint('reset');
  });

  pointEditComponent.setSaveClickHanlder(() => {
    replaceFormToPoint();
  });
  render(pointList, pointComponent.getElement(), RenderPosition.BEFOREEND);
}

for (let i = 1; i < POINT_COUNT; i++) {
  renderPoint(contentList, points[i]);
}
