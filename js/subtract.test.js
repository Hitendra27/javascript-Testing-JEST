const substract = require('./subtract');

test('properly substract numbers', () => {
  expect(substract(100, 50)).toBe(50);
  expect(substract(100, 50)).not.toBe(60);
});
