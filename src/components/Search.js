export class Search {
  //constructor for the "Search" class
  constructor({ submit }) {
    this._submit = submit;

    //config for "Search" class
    this._buttonLoadingClass = 'form__button_loading';

    this._formSelector = '.search__form';
    this._inputSelector = '.form__input';
    this._submitButtonSelector = '.search__button';
    this._resultListSelector = '.search-result__list';

    this._textSubmitButton = 'Search';

    this._resultListElement = document.querySelector(this._resultListSelector);
    this._formElement = document.querySelector(this._formSelector);
    this._inputElement = this._formElement.querySelector(this._inputSelector);
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);

    this._submitButton.textContent = this._textSubmitButton;

    this._submitEvtHandler = this._submitEvtHandler.bind(this);
  }

  //set loading status
  renderLoading(isLoading) {
    isLoading ? this._setLoadingState() : this._removeLoadingState();
  }

  //set loading state
  _setLoadingState() {
    this._submitButton.disabled = true;
    this._submitButton.textContent = '';
    this._submitButton.classList.add(this._buttonLoadingClass);
  }

  //remove loading state
  _removeLoadingState() {
    this._submitButton.disabled = false;
    this._submitButton.textContent = this._textSubmitButton;
    this._submitButton.classList.remove(this._buttonLoadingClass);
  }

  //if submit evt handler
  _submitEvtHandler(evt) {
    evt.preventDefault();
    while (this._resultListElement.firstChild) {
      this._resultListElement.removeChild(this._resultListElement.firstChild);
    }
    this._submit(this._inputElement.value);
  }

  //set event listeners "Search" class popup
  setEventListeners() {
    this._formElement.addEventListener('submit', this._submitEvtHandler);
  }
}
