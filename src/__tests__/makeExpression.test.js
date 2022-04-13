import makeExpression from '../mathFunctions/makeExpression';

const num1 = 10
const num2 = 3

test('returns a basic expression', () => {
    expect(["𝑥+3","𝑥-3"]).toContain(makeExpression(num1, num2));
});

test('returns an expression containing mutiplication', () => {
  expect(["10𝑥+3","10𝑥-3"]).toContain(makeExpression(num1, num2, ["multiply"]));
});

test('returns an expression containing division', () => {
  expect(["𝑥⁄10+3","𝑥⁄10-3"]).toContain(makeExpression(num1, num2, ["divide"]));
});

test('returns an expression containing exponents', () => {
  expect(["𝑥²+3","𝑥²-3"]).toContain(makeExpression(num1, num2, ["power"]));
});

test('returns an expression containing mutiplication and exponents(1)', () => {
  expect(["10𝑥²+3","10𝑥²-3"]).toContain(makeExpression(num1, num2, ["multiply", "power"]));
});

test('returns an expression containing mutiplication and exponents(2)', () => {
  expect(["10𝑥²+3","10𝑥²-3"]).toContain(makeExpression(num1, num2, ["power", "multiply"]));
});

test('returns an expression containing division and exponents(1)', () => {
  expect(["𝑥²⁄10+3","𝑥²⁄10-3"]).toContain(makeExpression(num1, num2, ["divide", "power"]));
});

test('returns an expression containing division and exponents(2)', () => {
  expect(["𝑥²⁄10+3","𝑥²⁄10-3"]).toContain(makeExpression(num1, num2, ["power", "divide"]));
});