/*

*/

const _capitalizeWord = word => word[0].toUpperCase() + word.slice(1);

const capitalize = str => {
  let capitalized = "";
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i];
    }
  }
  return capitalized;
};

const capitalize2 = str =>
  str
    .split(" ")
    .map(w => _capitalizeWord(w))
    .join(" ");

module.exports = { capitalize, capitalize2 };
