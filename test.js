const factoriel = require('./fact');

test('factoriel function exists', () => {
  expect(factoriel).toBeDefined();
});

test('factoriel handles 0 as an input', () => {
  expect(factoriel(0)).toEqual(1);
});

test('factoriel flips a positive number', () => {
  expect(factoriel(5)).toEqual(120);
});