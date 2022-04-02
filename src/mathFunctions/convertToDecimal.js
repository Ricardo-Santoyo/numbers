function convertToDecimal(string) {
  if (string.includes(".")) {
    return string;
  } else if (string === "") {
    return "0."
  } else {
    return string + ".";
  }
};

export default convertToDecimal;