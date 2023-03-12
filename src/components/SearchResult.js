export class SearchResult {
  //constructor for the "SearchResult" class
  constructor({ name, url, language, description, ownerLogin, ownerUrl, ownerAvatarUrl }) {
    //data for the init result
    this._name = name;
    this._url = url;
    this._language = language;
    this._description = description;
    this._ownerLogin = ownerLogin;
    this._ownerUrl = ownerUrl;
    this._ownerAvatarUrl = ownerAvatarUrl;

    //config for "SearchResult" class
    this._templateSelector = '#result-template';
    this._resultSelector = '.search-result__item';
    this._avatarSelector = '.search-result__avatar';
    this._nameSelector = '.search-result__name';
    this._ownerSelector = '.search-result__owner';
    this._languageLabelSelector = '.search-result__language-label';
    this._languageSelector = '.search-result__language';
    this._descriptionContainerSelector = '.search-result__description-container';
    this._descriptionSelector = '.search-result__description';
  }

  //get template result from page
  _getTemplate() {
    const resultElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._resultSelector)
      .cloneNode(true);
    return resultElement;
  }

  //generate result
  generateResult() {
    //get template result
    this._element = this._getTemplate();
    this._avatarElement = this._element.querySelector(this._avatarSelector);
    this._nameElement = this._element.querySelector(this._nameSelector);
    this._ownerElement = this._element.querySelector(this._ownerSelector);
    this._languageLabelElement = this._element.querySelector(this._languageLabelSelector);
    this._languageElement = this._element.querySelector(this._languageSelector);
    this._descriptionContainerElement = this._element.querySelector(
      this._descriptionContainerSelector
    );
    this._descriptionElement = this._element.querySelector(this._descriptionSelector);

    //set variables comment
    this._avatarElement.style.backgroundImage = `url(${this._ownerAvatarUrl})`;
    this._nameElement.textContent = this._name;
    this._nameElement.setAttribute('href', this._url);
    this._ownerElement.textContent = this._ownerLogin;
    this._ownerElement.setAttribute('href', this._ownerUrl);
    this._language === null
      ? this._languageLabelElement.remove()
      : (this._languageElement.textContent = this._language);
    this._description === null
      ? this._descriptionContainerElement.remove()
      : (this._descriptionElement.textContent = this._description);

    return this._element;
  }
}
