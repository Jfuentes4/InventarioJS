export function doc () {
    return `<!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/styles.css">
        <title>Inventario</title>
      </head>
  <body>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-2 col-md-3 head-bar">
            <img src="../media/icons/icons8_Outline_48px.png" class=" align-middle mx-2" alt="">
            <span class="align-middle title">Inventario</span>
        </div>
        <div class="col-lg-10 col-md-9 head-bar">
          <div class="row justify-content-center align-items-center" style="height: 100%;">
            <form id="searchForm" class="f-inline form-inline align-middle col-lg-7 col-md-12">
              <input class="form-control w-75 mr-sm-2" type="search" placeholder="Search" id="searchInput" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" id="btnSearch" type="button">Search</button>
            </form>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3" id="side-bar">
          <button type="button" class="btn-add-contact m-2" name="button"  data-toggle="modal" data-target="#addArticleForm">
            <img src="../media/icons/icons8_Plus_Math_48px.png" class="icon-36" alt="">
            <span class="align-middle text-btn">Añadir Articulo</span>
          </button>
          <div class="list mt-4">
            <div class="list-item  item-selected" id="btnArticles">
              <div class="align-middle inline mx-4">
                <img src="../media/icons/icons8_Product_48px.png" class="icon-20 align-middle" alt="">
                <span class="text-item align-middle mx-3">Articulos</span>
              </div>
            </div>
            <div class="list-item" id="btnReport">
              <div class="align-middle inline mx-4">
                <img src="../media/icons/icons8_Profit_Report_48px.png" class="icon-20 align-middle" alt="">
                <span class="text-item align-middle mx-3">Reporte</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-md-9">
          <table id="table-articles" class="table" >
            <thead>
              <tr>
                <th>Codigo</th><th>Nombre</th><th>Price</th><th>Cantidad</th><th>Descripcion</th><th></th>
              </tr>
            </thead>
            <tbody id="tableBody">

            </tbody>
          </table>
          <div id="report-container" class="row justify-content-center my-3">
            <div id="report" class="col-10">

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addArticleForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nuevo Articulo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="needs-validation" id="newArticleForm" novalidate>
              <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Nombre" value="manuel" required>
              </div>
              <div class="form-row form-group">
                <div class="col-6">
                  <input type="text" class="form-control" id="code" placeholder="Codigo" value="011" required>
                </div>
                <div class="col-6">
                  <input type="number" class="form-control" id="price" placeholder="Precio" value="30" required>
                </div>
              </div>
              <div class="form-row form-group">
                <div class="col-6">
                  <input type="number" class="form-control" id="quantity" placeholder="Cantidad" value="10" required>
                </div>
                <div class="col-6">
                  <input type="number" class="form-control" id="index" placeholder="Indice(opcional)">
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="description" placeholder="Description" value="example" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary mx-3" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="addArticle">Crear Articulo</button>
          </div>
        </div>
      </div>
    </div>

    <!--Javascript funcional-->
    <script src="../js/main.js" type="module"></script>

    <!--Sweet Alert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>

    <!--bootstrap-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  </body>
  </html>`
}
