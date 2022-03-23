import add from '../mathFunctions/add';

test('returns the sum of 2 numbers', () => {
    expect(add(7, 26)).toBe(33);
});

test('returns the sum of 2 negative numbers', () => {
  expect(add(-67, -88)).toBe(-155);
});

test('returns the sum of a positive and negative number', () => {
  expect(add(-4, 23)).toBe(19);
});