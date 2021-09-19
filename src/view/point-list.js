import {AbstractView} from './abstract.js';

const createPointListTemplate = () => '<ul class="trip-events__list"></ul>';

class PointListView extends AbstractView {
  getTemplate() {
    return createPointListTemplate();
  }
}

export {PointListView};
