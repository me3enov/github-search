export class Api {
  constructor() {
    this._headers = {
      authorization: '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',
      'Content-Type': 'application/vnd.github+json'
    };
    this._url = 'https://api.github.com/search/';
    this._repositories = 'repositories?q=';
  }

  //get all matches
  getRepositories(name) {
    this._name = name;
    return fetch(`${this._url}${this._repositories}${this._name}`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkServerResponse);
  }

  //check response from server
  _checkServerResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }
}
