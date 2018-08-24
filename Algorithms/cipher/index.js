const cipher = (str, num) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let input = str.toLowerCase();
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (!alphabets.includes(letter)) {
      output += letter;
      continue;
    }
    let index = alphabets.indexOf(letter) + (num % 26);
    if (index > 25) index -= 26;
    if (index < 0) index += 26;
    if (str[i] === str[i].toUpperCase()) {
      output += alphabets[index].toUpperCase();
    } else {
      output += alphabets[index];
    }
  }
  return output;
};

module.exports = cipher;
