function divide(num1, num2) {
  // returns the quotient of two numbers. rounds to the nearest 100ths place.
  const result = num1 / num2;
  return Math.round(result * 100) / 100
};

export default divide;