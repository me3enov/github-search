import './main.global.sass';
import { Api } from '../components/Api';
import { Section } from '../components/Section';
import { Search } from '../components/Search';
import { SearchResult } from '../components/SearchResult';
import { ResultError } from '../components/ResultError';
import { FormValidator } from '../components/FormValidator';

const api = new Api();
const footerCopyright = document.querySelector('.footer__copyright');

// set copyright
footerCopyright.textContent = `${new Date().getFullYear()} Artem Mezenov`;

// Search init
const resultError = new ResultError();

// Search init
const search = new Search({
  submit: getRepositories
});
search.setEventListeners();

// all results init
const results = new Section(
  {
    renderer: (item) => {
      // create result
      const result = createResult(item);
      // add result to the page
      results.addItem(result, 'append');
    }
  },
  '.search-result__list'
);

// create new result
const createResult = (resultData) => {
  const result = new SearchResult({
    name: resultData.name,
    url: resultData.html_url,
    language: resultData.language,
    description: resultData.description,
    ownerLogin: resultData.owner.login,
    ownerUrl: resultData.owner.html_url,
    ownerAvatarUrl: resultData.owner.avatar_url
  });
  return result.generateResult();
};

// add post form submit
function getRepositories(data) {
  // get start
  resultError.hideError();
  search.renderLoading(true);
  api
    .getRepositories(data)
    .then((data) => {
      const result = data.items.slice(0, 10);
      result.length > 0 ? results.renderItems(result) : resultError.showError();
    })
    .catch((err) => {
      //error log
      console.log(err);
      resultError.showError(err);
    })
    .finally(() => {
      //all done
      search.renderLoading(false);
    });
}

// enable validation search form
const commentsAddForm = new FormValidator({
  selector: '.search__form'
});
commentsAddForm.enableValidation();
