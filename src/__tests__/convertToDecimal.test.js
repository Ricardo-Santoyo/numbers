import convertToDecimal from '../mathFunctions/convertToDecimal';

test('adds decimal point to num', () => {
    expect(convertToDecimal("26")).toBe("26.");
});

test('prevents mutiple decimal points from being added', () => {
  let num = "45";
  num = convertToDecimal(num);
  num = convertToDecimal(num);
  expect(convertToDecimal(num)).toBe("45.");
});

test('returns 0. if empty string is given', () => {
  expect(convertToDecimal("")).toBe("0.");
});