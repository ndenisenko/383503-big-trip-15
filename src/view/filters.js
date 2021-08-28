const FILTERS = {
  everything: true,
  future: false,
  past: false,
};

function createFilters () {
  return `<form class="trip-filters" action="#" method="get">
  ${Object.keys(FILTERS).map((element) => `<div class="trip-filters__filter">
  <input id="filter-${element}" class="trip-f ilters__filter-input  visually-hidden" type="radio" name="trip-filter"
  value=${element}
  ${FILTERS[element] ? 'checked' : ''}>
  <label class="trip-filters__filter-label" for="filter-${element}">${element}</label>
  </div>`).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
}

export {createFilters};
