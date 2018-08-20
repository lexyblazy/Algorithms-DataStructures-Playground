const reverse = str =>
  str
    .split("")
    .reverse()
    .join("");

const reverse2 = str => {
  let result = "";
  for (let el of str) {
    result = el + result;
  }
  return result;
};

module.exports = { reverse, reverse2 };
