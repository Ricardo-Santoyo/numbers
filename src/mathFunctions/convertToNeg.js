function convertToNeg(string) {
  // Converts positive string num to negative string num and vice versa.
  if (string === "") {
    return "-";
  } else if (string === "-") {
    return "";
  } else {
    return "" + -(string);
  }
};

export default convertToNeg;