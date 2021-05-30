/**
 * @jest-environment jsdom
 */

const jsdom = require("jsdom");
const {doc} = require("./doc.js");
import Main from '../main.js';

test('El validador debera devolver Verdadero', () => {
    document.body.innerHTML = doc();
    let main = new Main();
    expect(main._addArticle()).toBeTruthy();
})

test('El validador debera devolver falso', () => {
    document.body.innerHTML = doc();
    let main = new Main();
    document.getElementById('price').value = "";
    document.getElementById('name').value = "";
    expect(main._addArticle()).toBeFalsy();
})

test('La funcion debe retornoar la cadena buscada en el input', () => {
    document.body.innerHTML = doc();
    let main = new Main();
    let input = "pasa"

    document.getElementById('searchInput').value = input;
    expect(main._searchArticle(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
  
  }))).toBe(input);
})

test('La funcion debe retornar el elemento reporte de HTML', () => {
    document.body.innerHTML = doc();
    let main = new Main();
    expect(main._getReport()).toEqual(document.getElementById('report'));
})

test('La funcion debe retornar un objeto JSON con los datos del articulo', () => {
    document.body.innerHTML = doc();
    let main = new Main();
    let objArticle = {
        name: 'manuel',
        code: '011',
        price: 30,
        quantity: 10,
        description: "example",
        index: ""
      };

    expect(main._getData()).toEqual(objArticle);
})