function makeExpression(num1, num2, options) {
  const operation = (Math.round(Math.random()) === 0) ? "-" : "+";
  return `𝑥${operation}${num2}`
};

export default makeExpression;