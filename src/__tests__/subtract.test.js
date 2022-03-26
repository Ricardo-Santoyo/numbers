import subtract from '../mathFunctions/subtract';

test('returns the difference of 2 numbers', () => {
    expect(subtract(26, 12)).toBe(14);
});

test('returns the difference of 2 negative numbers', () => {
  expect(subtract(-67, -88)).toBe(21);
});

test('returns the difference of a positive and negative number', () => {
  expect(subtract(-4, 23)).toBe(-27);
});