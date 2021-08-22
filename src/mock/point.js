import dayjs from 'dayjs';
import {OFFERS} from './offers.js';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const CITIES = ['Paris', 'Nice', 'Lyon', 'Bordeaux', 'Marseille', 'Toulouse', 'Rome', 'Venice', 'Florence', 'Milan', 'Verona', 'Turin', 'Berlin'];
const photoPath = 'http://picsum.photos/248/152?r=';
const MAX_SENTENCES_COUNT = 5;
const MIN_SENTENCES_COUNT = 1;

const generateDescription = () => {
  const mockText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Cras aliquet varius magna, non porta ligula feugiat eget',
    'Fusce tristique felis at fermentum pharetra', 'Aliquam id orci ut lectus varius viverra', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui',
    'Sed sed nisi sed augue convallis suscipit in sed felis', 'Aliquam erat volutpat', 'Nunc fermentum tortor ac porta dapibus', 'In rutrum ac purus sit amet tempus'];

  const randomCount = getRandomInteger(MIN_SENTENCES_COUNT, MAX_SENTENCES_COUNT);
  const description = [];
  for (let i = 0; i < randomCount; i++) {
    const randomIndex = getRandomInteger(0, mockText.length - 1);
    description.push(mockText[randomIndex]);
  }
  return description.join('. ');
};

const getRandomCity = function () {
  return CITIES[getRandomInteger(0, CITIES.length - 1)];
};

const getRandomType = function () {
  return TYPES[getRandomInteger(0, TYPES.length - 1)];
};

const getOffersByType = (type) => {
  let outOffers = {};
  if (getRandomInteger(0, 1)) {
    OFFERS.forEach((el) => {
      if (el.type === type) {
        outOffers = el;
      }
    });
  }
  return outOffers;
};

const getRandomPrice = () => {
  const maxPrice = getRandomInteger(10,200);
  return (maxPrice - maxPrice%10);
};

const getRandomDateFrom = function () {
  return dayjs().add(getRandomInteger(0, 1440), 'minute');
};

const getRandomDateTo = function (dateFrom) {
  return dateFrom.add(getRandomInteger(1, 10080), 'minute');
};

const isFavorite = () => Boolean(getRandomInteger(0, 1));

const getDestination = function () {
  const randomIndex = getRandomInteger(0, 0);
  const photoList = [];
  for (let i = 0; i < randomIndex; i++) {
    photoList.push(photoPath + getRandomInteger(1, 10).toString());
  }
  return {
    description: generateDescription(),
    photos: photoList,
  };
};

const generatePoint = () => {
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
};

export {CITIES, generatePoint};
