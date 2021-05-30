class GraphicManager {
  constructor () {
    this._Table = document.getElementById('tableBody');
  }

  _removeUniqueRow = (index) => {
    this._Table.deleteRow(index);
  }

  showReport = () => {
    document.getElementById('report-container').style.display = 'inline';
    document.getElementById('table-articles').style.display = 'none';
    document.getElementById('btnReport').className = 'list-item  item-selected';
    document.getElementById('btnArticles').className = 'list-item';
  }

  showArticles = () => {
    document.getElementById('report-container').style.display = 'none';
    document.getElementById('table-articles').style.display = 'table';
    document.getElementById('btnReport').className = 'list-item';
    document.getElementById('btnArticles').className = 'list-item  item-selected';
  }

  _escapeHtml = (article) => {
    return article.replace(/[&<>"'\/]/g, function (s) {
      var entityMap = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '/': '&#x2F;'
        };

      return entityMap[s];
    });
  }

  showOnTable = (articles, deleteFunction) => {
    this._Table.innerHTML = '';
    articles.forEach((article) => {
      let row = this._Table.insertRow(-1);

      let codeCell = row.insertCell(0);
      let nameCell = row.insertCell(1);
      let quantityCell = row.insertCell(2);
      let priceCell = row.insertCell(3);
      let descriptionCell = row.insertCell(4);
      let deleteCell = row.insertCell(5);

      codeCell.appendChild(document.createTextNode(this._escapeHtml(String(article.code))));
      console.log('2');
      nameCell.appendChild(document.createTextNode(this._escapeHtml(String(article.name))));
      console.log('3');
      quantityCell.appendChild(document.createTextNode(this._escapeHtml(String(article.quantity))));
      console.log('4');
      priceCell.appendChild(document.createTextNode(this._escapeHtml(String(article.price))));
      console.log('5');
      descriptionCell.appendChild(document.createTextNode(this._escapeHtml(String(article.description))));

      let deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger';
      deleteButton.innerHTML = 'Eliminar';
      deleteButton.addEventListener('click', () => {
        this._deleteContact(deleteFunction, row, article);
      });

      deleteCell.appendChild(deleteButton);

    });
  }

  /*_deleteContact = (deleteFunction, row, article) => {

    let rowIndex = row.rowIndex -1;

    Swal.fire({
      title: 'Esta seguro de eliminar este contacto?',
      text: 'Esta accion no puede deshacerse!.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.value) {

        deleteFunction(article.code);
        this._removeUniqueRow(rowIndex);

        Swal.fire(
          'Eliminado!',
          'El registro se ha eliminado correctamente',
          'success'
        );
      }
    });
  }

  errorMenssage = (title, message) => {
    Swal.fire(
      title ,
      message,
      'error'
    );
  }

  successMenssage = (title, message) => {
    Swal.fire(
      title ,
      message,
      'success'
    );
  }*/
}

export default GraphicManager;
