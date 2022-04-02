import divide from '../mathFunctions/divide';

test('returns the quotient of 2 numbers(1)', () => {
    expect(divide(7, 26)).toBe(0.27);
});

test('returns the quotient of 2 numbers(2)', () => {
  expect(divide(15, 1000)).toBe(0.02);
});

test('returns the quotient of 2 numbers(2)', () => {
  expect(divide(81, 22)).toBe(3.68);
});

test('returns the quotient of 2 negative numbers', () => {
  expect(divide(-69, -3)).toBe(23);
});

test('returns the quotient of a positive and negative number(1)', () => {
  expect(divide(-4, 23)).toBe(-0.17);
});

test('returns the quotient of a positive and negative number(2)', () => {
  expect(divide(-12, 34)).toBe(-0.35);
});