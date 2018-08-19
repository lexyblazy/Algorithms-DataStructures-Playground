// reverse a string
const reverse = str =>
  str
    .split("")
    .reverse()
    .join("");

const reverse2 = str => {
  let result = "";
  for (let char of str) {
    result = char + result;
  }
  return result;
};

module.exports = {reverse,reverse2};