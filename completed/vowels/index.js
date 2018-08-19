//count the vowels
let vowels = words => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  words
    .toLowerCase()
    .split("")
    .forEach(w => {
      if (vowels.includes(w)) {
        count++;
      }
    });
  return count;
};

let vowels2 = words => {
  let matches = words.match(/[aeiou]/gi);
  return matches.length;
};

module.exports = { vowels, vowels2 };
