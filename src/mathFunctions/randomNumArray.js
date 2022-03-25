function randomNumArray(length) {
  // returns an array containing random numbers between 0 and 99 (inclusive).
  let numsArray = [];
  for (length; length > 0; length--) {
    numsArray.push(Math.floor(Math.random() * 100));
  }
  return numsArray;
};

export default randomNumArray;