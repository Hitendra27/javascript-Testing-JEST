const sum = require('./sum');

test('properly adds two numbers', () => {
  expect(sum(2, 4)).toBe(6);
});
