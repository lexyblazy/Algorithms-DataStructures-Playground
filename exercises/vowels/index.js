const vowels = str => {
  const vowels = "aeiou".split("");
  let counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
};

const vowels2 = str => {
  const regex = /[aieou]/g;
  const matches = str.match(regex);
  return matches.length;
};

module.exports = { vowels, vowels2 };
