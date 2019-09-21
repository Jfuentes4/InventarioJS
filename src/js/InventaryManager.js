import Article from './Article.js';
import GraphicManager from './GraphicManager.js';

class InventaryManager {
  constructor () {
    this._articles = [];
    this._articlesToShow = [];
    this._graphicManager = new GraphicManager();
  }

  addArticle = (dataArticle) => {
    if (this._ifDontExist(dataArticle.code)) {
      if(this._setArticleToArrayAndLS(dataArticle)){
        this.refreshTable();
        $('#addArticleForm').modal('hide');
        document.getElementById('newArticleForm').reset();
        this._graphicManager.successMenssage ('Añadido!', 'Tu Articulo fue añadido con exito.');
      }
    } else {
      alert('este Articulo ya esta actualmente registrado');
    }

  }

  _setArticleToArrayAndLS = (dataArticle) => {
    let success = false;
    console.log(dataArticle);
    let article = new Article(dataArticle);
    if (dataArticle.index !== "" ) {
      if (dataArticle.index >= 0 && dataArticle.index <= this._articles.length) {
        console.log(this._articles);
        this._articles.splice(dataArticle.index, 0, article);
        this._articlesToShow.splice(dataArticle.index, 0, article);
        success = true;
      }else {
        this._graphicManager.errorMenssage('Error', 'El indice ingresado no es valido (min 0, max ' + this._articles.length + ')');
      }
    } else {
      this._articles.push(article);
      this._articlesToShow.push(article);
      success = true;
    }

    return success;
  }

  _deleteArticle = (code) => {
    let index = this.findArticle(code);
    this._articles.splice(index, 1);
  }

  refreshTable = () => {
    this.articles()
    this._graphicManager.showOnTable(this._articlesToShow, this._deleteArticle);
  }

  searchArticles = (str) => {
    this.articles();
    this._articlesToShow = this._articles.filter((article, index) => {
      if(article.name.includes(str)){
        article.index = index;
        return article;
      }else {
        return;
      }
    });
    this._graphicManager.showOnTable(this._articlesToShow, this._deleteArticle);
  }

  report = (report) => {
    this._graphicManager.showReport();
    let reportstr = '<h3>Reporte de Inventario</h3> <br><br>',
    sumArticles = 0;
    this._articles.forEach((article) => {
      reportstr += article.toString() + '<br>'
      sumArticles += article.quantity;
    })
    reportstr += '<br>Total de Articulos Distintos: ' + this._articles.length + ' Total de Articulos en inventario: ' + sumArticles;
    report.innerHTML = reportstr;
  }

  articles = () => {
    this._graphicManager.showArticles();
  }

  _ifDontExist = (code) => {
    let dontExist = true;
    if (this.findArticle(code) !== -1) {
      dontExist = false;
    }
    return dontExist;
  }

  findArticle = (code) => {
    let articleIndex = -1;
    this._articles.forEach((currentArticle, index) => {
      if (currentArticle.code === code ) {
        articleIndex = index;
      }
    });
    return articleIndex;
  }

}

export default InventaryManager;
