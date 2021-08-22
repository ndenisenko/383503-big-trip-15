const SORT_BY = ['day', 'event', 'time', 'price', 'offer'];

export const createSort = () => {
  const arrayCopy = SORT_BY.map((el) => (`<div class="trip-sort__item  trip-sort__item--${el}">
    <input id="sort-${el}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${el}">
    <label class="trip-sort__btn" for="sort-${el}">${el}</label>
  </div>`)).join('');
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${arrayCopy}
  </form>`;
};
