import {FiltersView} from '../view/filters.js';
import {SiteMenuView} from '../view/menu.js';
import {RouteInfoView} from '../view/route-info.js';
import {SortView} from '../view/sort.js';
import {TripPriceView} from '../view/trip-price.js';
import {RenderPosition, render} from '../utils/render.js';
import {updateItem} from '../utils/common.js';
import {PointPresenter} from './point.js';
import {PointListView} from '../view/point-list.js';

class TripPresenter {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;

    this._filtersComponent = new FiltersView();
    this._menuComponent = new SiteMenuView();
    this._routeInfoComponent = new RouteInfoView();
    this._sortComponent = new SortView();
    this._tripPriceComponent = new TripPriceView();
    this._pointListComponent = new PointListView();

    this._pointPresenter = new Map();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(tripPoints) {
    this._tripPoints = tripPoints.slice();

    this._renderTrip();
  }

  _handlePointChange(updatedPoint) {
    this._tripPoints = updateItem(this._tripPoints, updatedPoint);
    this._pointPresenter.get(updatedPoint.id).init(updatedPoint);
  }

  _handleModeChange() {
    this._pointPresenter.forEach((presenter) => presenter.resetView());
  }

  _renderRouteInfo() {
    const trpMain = document.querySelector('.trip-main');
    render(trpMain, this._routeInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderSort() {
    const tripEvents = document.querySelector('.trip-events');
    render(tripEvents, this._sortComponent, RenderPosition.AFTERBEGIN);
  }

  _renderFilter() {
    const filters = document.querySelector('.trip-controls__filters');
    render(filters, this._filtersComponent, RenderPosition.BEFOREEND);
  }

  _renderTripNavigation() {
    const tripNavigation = document.querySelector('.trip-controls__navigation');
    render(tripNavigation, this._menuComponent, RenderPosition.BEFOREEND);
  }

  _renderPrice() {
    const tripInfo = document.querySelector('.trip-info');
    render(tripInfo, this._tripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._pointListComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);

    this._pointPresenter.set(point.id, pointPresenter);
  }

  _renderPoints() {
    this._tripPoints.forEach((tripPoint) => this._renderPoint(tripPoint));
    const tripEvents = document.querySelector('.trip-events');
    render(tripEvents, this._pointListComponent, RenderPosition.BEFOREEND);
  }

  _renderNoPoint() {
  }

  _renderTrip() {
    this._renderFilter();
    this._renderTripNavigation();
    this._renderRouteInfo();
    this._renderPrice();
    this._renderSort();

    this._renderPoints();
  }
}

export {TripPresenter};

