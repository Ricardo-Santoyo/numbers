function convertToDecimal(string) {
  if (string.includes(".")) {
    return string;
  } else {
    return string + ".";
  }
};

export default convertToDecimal;