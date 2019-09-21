import InventaryManager from './InventaryManager.js';

class Main {
  constructor () {
    this._form = document.getElementById('newArticleForm');
    this._inventaryManager = new InventaryManager();
    document.getElementById('addArticle').addEventListener('click', this._addArticle);
    document.getElementById('btnReport').addEventListener('click', this._getReport);
    document.getElementById('btnArticles').addEventListener('click', this._getArticles);
    document.getElementById('btnSearch').addEventListener('click', this._searchArticle);
    document.getElementById('searchInput').addEventListener('change', this._searchArticle);
    document.getElementById('searchForm').addEventListener('submit', (e) => { e.preventDefault(); });
  }

  _addArticle = () => {
    if(this._form.checkValidity() === true) {
      let dataArticle = this._getData();
      this._inventaryManager.addArticle(dataArticle);
    }
   this._form.classList.add('was-validated');
  }

  _searchArticle = (e) => {
    e.preventDefault();
    let strSearched = document.getElementById('searchInput').value;
    this._inventaryManager.searchArticles(strSearched);
  }

  _getArticles = () => {
    this._inventaryManager.articles();
  }

  _getReport = () => {
    this._inventaryManager.report(document.getElementById('report'));
  }

  _getData  = () => {
    let name = document.getElementById('name').value;
    let code = document.getElementById('code').value;
    let price = Number(document.getElementById('price').value);
    let quantity = Number(document.getElementById('quantity').value);
    let description = document.getElementById('description').value;
    let index = document.getElementById('index').value;
    let objArticle = {
      name,
      code,
      price,
      quantity,
      description,
      index
    };
    return objArticle;
  }

}

var main = new Main();
