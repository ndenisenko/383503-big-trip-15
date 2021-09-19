import {RenderPosition, render, replace, remove} from '../utils/render.js';
import {EditionFormView} from '../view/form-of-edition.js';
import {PointView} from '../view/route-point.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

class PointPresenter {
  constructor(pointListContainer, changeData, changeMode) {
    this._pointListContainer = pointListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._pointComponent = null;
    this._pointEditComponent = null;

    this._mode = Mode.DEFAULT;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleSubmitClick = this._handleSubmitClick.bind(this);
    this._handleResetClick = this._handleResetClick.bind(this);
    this._handleSaveClick = this._handleSaveClick.bind(this);

    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(point) {
    this._point = point;

    this._pointComponent = new PointView(point);
    this._pointEditComponent = new EditionFormView(point);

    this._pointComponent.setEditClickHandler(this._handleEditClick);
    this._pointEditComponent.setSaveClickHanlder(this._handleSaveClick);
    this._pointEditComponent.setSubmitClickHandler(this._handleSubmitClick);
    this._pointEditComponent.setResetClickHandler(this._handleResetClick);

    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    render(this._pointListContainer, this._pointComponent, RenderPosition.BEFOREEND);
  }

  destroy() {
    remove(this._pointComponent);
    remove(this._pointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToPoint();
    }
  }

  _replacePointToForm() {
    replace(this._pointEditComponent, this._pointComponent);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToPoint () {
    replace(this._pointComponent, this._pointEditComponent);
    this._mode = Mode.DEFAULT;
  }

  // Обработчик по стрелке вниз
  _handleEditClick() {
    this._replacePointToForm();
  }

  // Обработчик по стрелке вверх
  _handleSubmitClick() {
    this._replaceFormToPoint();
  }

  // Обработчик по ресету формы
  _handleResetClick() {
    this._replaceFormToPoint();
  }

  // Обработчик по клику на сабмиту формы
  _handleSaveClick() {
    this._replaceFormToPoint();
  }

  _handleFavoriteClick() {
    this._changeData(
      Object.assign(
        {},
        this._point,
        {
          isFavorite: !this._point.isFavorite,
        },
      ),
    );
  }
}

export {PointPresenter};
