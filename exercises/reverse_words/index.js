const { reverse } = require("../reverse_string/index");

const reverseWords = words => {
  return words
    .split(" ")
    .map(w => reverse(w))
    .join(" ");
};
module.exports = reverseWords;
