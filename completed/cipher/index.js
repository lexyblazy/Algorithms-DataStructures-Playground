let cipher = (string = "", number = 0) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let input = string.toLocaleLowerCase();
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (!alphabets.includes(letter)) {
      output += letter;
      continue;
    }
    let index = alphabets.indexOf(letter) + number%26;
    if (index > 25) index -= 26;
    if (index < 0) index += 26;
    output +=
      string[i] === string[i].toUpperCase()
        ? alphabets[index].toUpperCase()
        : alphabets[index];
  }
  return output;
};

module.exports = cipher;