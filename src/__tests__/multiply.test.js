import multiply from '../mathFunctions/multiply';

test('returns the product of 2 numbers', () => {
    expect(multiply(7, 26)).toBe(182);
});

test('returns the product of 2 negative numbers', () => {
  expect(multiply(-69, -3)).toBe(207);
});

test('returns the product of a positive and negative number', () => {
  expect(multiply(-4, 23)).toBe(-92);
});