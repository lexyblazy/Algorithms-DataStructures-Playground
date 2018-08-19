// reverse words

const _reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");
const reverseWords = str =>
  str
    .split(" ")
    .map(word => _reverseString(word))
    .join(" ");
  
module.exports = reverseWords;