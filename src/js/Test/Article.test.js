import Article from '../Article.js';

let articleExample = new Article({
    code: '1234',
    name: 'John',
    price: 30,
    quantity: 5,
    description: 'example'
});

test('the article code must be 1234', () => {
    expect(articleExample.code).toBe('1234');
})

test('the article code must be John', () => {
    expect(articleExample.name).toBe('John');
})

test('the article price must be 30', () => {
    expect(articleExample.price).toBe(30);
})

test('the article quantity must be 5', () => {
    expect(articleExample.quantity).toBe(5);
})

test('the article description must be example', () => {
    expect(articleExample.description).toBe('example');
    //expect(articleExample.code).
})