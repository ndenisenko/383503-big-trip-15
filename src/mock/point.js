import dayjs from 'dayjs';
import {OFFERS} from './offers.js';
import {getRandomInteger} from '../utils/get-random-integer.js';

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const CITIES = ['Paris', 'Nice', 'Lyon', 'Bordeaux', 'Marseille', 'Toulouse', 'Rome', 'Venice', 'Florence', 'Milan', 'Verona', 'Turin', 'Berlin'];
const MAX_SENTENCES_COUNT = 5;
const MIN_SENTENCES_COUNT = 1;
const MAX_BASE_PRICE = 10;
const MIN_BASE_PRICE = 200;
const START_OFFSET_IN_DAYS = 7;
const MAX_EVENT_DURATION_IN_MINUTES = 1440;
const MIN_PHOTOS_NUMBER = 0;
const MAX_PHOTOS_NUMBER = 5;

const mockText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Cras aliquet varius magna, non porta ligula feugiat eget',
  'Fusce tristique felis at fermentum pharetra', 'Aliquam id orci ut lectus varius viverra', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui',
  'Sed sed nisi sed augue convallis suscipit in sed felis', 'Aliquam erat volutpat', 'Nunc fermentum tortor ac porta dapibus', 'In rutrum ac purus sit amet tempus'];
const photoPath = 'http://picsum.photos/248/152?r=';

function generateDescription () {
  const randomCount = getRandomInteger(MIN_SENTENCES_COUNT, MAX_SENTENCES_COUNT);
  const description = [];
  for (let i = 0; i < randomCount; i++) {
    const randomIndex = getRandomInteger(0, mockText.length - 1);
    description.push(mockText[randomIndex]);
  }
  return description.join('. ');
}

function getRandomCity () {
  return CITIES[getRandomInteger(0, CITIES.length - 1)];
}

function getRandomType () {
  return TYPES[getRandomInteger(0, TYPES.length - 1)];
}

function getOffersByType (type) {
  let outOffers = {};
  if (getRandomInteger(0, 1)) {
    OFFERS.forEach((el) => {
      if (el.type === type) {
        outOffers = el;
      }
    });
  }
  return outOffers;
}

function getRandomPrice  () {
  const maxPrice = getRandomInteger(MIN_BASE_PRICE,MAX_BASE_PRICE);
  return (maxPrice - maxPrice%10);
}

function getRandomDateFrom () {
  return dayjs().add(getRandomInteger(0, START_OFFSET_IN_DAYS), 'day');
}

function getRandomDateTo (dateFrom) {
  return dateFrom.add(getRandomInteger(1,  MAX_EVENT_DURATION_IN_MINUTES), 'minute');
}

function isFavorite () { return Boolean(getRandomInteger(0, 1)); }

function getDestination () {
  const randomIndex = getRandomInteger(MIN_PHOTOS_NUMBER, MAX_PHOTOS_NUMBER);
  const photoList = new Array(randomIndex).fill().map(() => photoPath + getRandomInteger(0,5));
  return {
    description: generateDescription(),
    photos: photoList,
  };
}

function generatePoint () {
  const type = getRandomType();
  const city = getRandomCity();
  const offers = getOffersByType(type);
  const dateFrom = getRandomDateFrom();
  const dateTo = getRandomDateTo(dateFrom);
  return {
    type,
    city,
    offers,
    basePrice: getRandomPrice(),
    dateFrom: dateFrom.toDate(),
    dateTo: dateTo.toDate(),
    id: '0',
    isFavorite: isFavorite(),
    destination: getDestination(),
  };
}

export {CITIES, generatePoint};
