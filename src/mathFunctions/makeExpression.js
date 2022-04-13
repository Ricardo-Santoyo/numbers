function makeExpression(num1, num2, options=[""]) {
  // Returns an algebraic expression
  const operation = (Math.round(Math.random()) === 0) ? "-" : "+";
  let xpart = "𝑥";

  options.forEach((option, i) => {
    switch (option) {
      case "multiply":
        xpart = `${num1}${xpart}`;
        break;
      case "divide":
        xpart = `${xpart}⁄${num1}`;
        break;
      case "power":
        xpart = (xpart.includes("⁄")) ? `𝑥²⁄${num1}` : `${xpart}²`;
        break;
    }
  });

  return `${xpart}${operation}${num2}`
};

export default makeExpression;