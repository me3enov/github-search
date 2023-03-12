export class ResultError {
    // constructor for the "ResultError" class
    constructor() {
        // config for "ResultError" class
        this._resultSelector = '.search-result_error';
        this._descriptionSelector = '.search-result__description_error';

        this._resultHideClass = 'search-result_hide';

        this._resultElement = document.querySelector(this._resultSelector);
        this._descriptionElement = this._resultElement.querySelector(this._descriptionSelector);
    }

    // show result error block
    showError(text = 'Nothing found') {
        this._text = text;
        this._descriptionElement.textContent = this._text;
        this._resultElement.classList.remove(this._resultHideClass)
    }

    // hide result error block
    hideError() {
        this._descriptionElement.textContent = ''
        this._resultElement.classList.add(this._resultHideClass)
    }

}
