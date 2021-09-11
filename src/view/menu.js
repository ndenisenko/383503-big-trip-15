import {Abstract} from './abstract.js';

function createNavigation () {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;
}

class SiteMenu extends Abstract {
  getTemplate() {
    return createNavigation();
  }
}

export {SiteMenu};
