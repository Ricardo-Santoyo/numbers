import convertToNeg from '../mathFunctions/convertToNeg';

test('converts negative num into a positive num', () => {
    expect(convertToNeg("26")).toBe("-26");
});

test('converts positive num to negative num', () => {
  expect(convertToNeg("-67")).toBe("67");
});

test('converts empty string to a - sign', () => {
  expect(convertToNeg("")).toBe("-");
});

test('converts - sign into a empty string', () => {
  expect(convertToNeg("-")).toBe("");
});

test('converts twice without errors', () => {
  let num = "12";
  num = convertToNeg(num);
  expect(convertToNeg(num)).toBe("12");
});

test('converts empty string twice without errors', () => {
  let num = "";
  num = convertToNeg(num);
  expect(convertToNeg(num)).toBe("");
});