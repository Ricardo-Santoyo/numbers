function makeExpression(num1, num2, options) {
  // Returns an algebraic expression
  const operation = (Math.round(Math.random()) === 0) ? "-" : "+";
  let xpart;
  switch (options) {
    case "multiply":
      xpart = `${num1}𝑥`;
      break;
    case "divide":
      xpart = `𝑥⁄${num1}`;
      break;
    default:
      xpart = "𝑥";
  }
  return `${xpart}${operation}${num2}`
};

export default makeExpression;