/**
 * @jest-environment jsdom
 */
 import IM from '../InventaryManager';
 const jsdom = require("jsdom");
 const {doc} = require("./doc.js");
 import Main from "../main.js";
 import Article from "../article.js";

 test("la funcion deberia recibir el objeto de datos del articulo", () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();
    let objArticle = {
        name: 'manuel',
        code: '011',
        price: 30,
        quantity: 10,
        description: "example",
        index: ""
      };

    expect(im.addArticle(main._getData())).toEqual(objArticle);
 })

 test('la funcion deberia resetear el formulario', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();
    im.addArticle(main._getData())

    expect(document.getElementById('name').value).toBe("manuel");
 })

 test('la funcion deberia retornar verdadero para el caso correcto', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();

    expect(im._setArticleToArrayAndLS(main._getData())).toBeTruthy();
 })

 test('la funcion deberia retornar verdadero para el caso incorrecto', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();
    document.getElementById('index').value = '-1';

    expect(im._setArticleToArrayAndLS(main._getData())).toBeFalsy();
 })

 test('la funcion deberia retornar el codigo del producto a eliminar', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();

    expect((im.addArticle(main._getData())).code).toBe("011");
 })

 /*test('la funcion deberia retornar un array de objetos article', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();

    im._setArticleToArrayAndLS(main._getData())

    expect((im.refreshTable())[0]).toEqual(new Article(main._getData()));
 })

 test('la funcion deberia retornar el nombre del producto a buscado', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();

    expect(im.searchArticles("man")).toBe("manuel");
 })*/
 

 test('la funcion deberia escribir en el campo de reporte', () => {
    document.body.innerHTML = doc();
    let im = new IM();
    let main = new Main();
    let report = document.getElementById("report");
    expect(im.report(report)).not.toBe("");
 })