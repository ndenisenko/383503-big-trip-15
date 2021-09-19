import {EditionFormView} from './view/form-of-edition.js';
import {generatePoint} from './mock/point.js';
import {TripPresenter} from './presenter/trip.js';

const POINT_COUNT = 15;

const points = new Array(POINT_COUNT).fill().map(generatePoint);
const tripContainer = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter(tripContainer);

tripPresenter.init(points);
