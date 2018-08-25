/** 
  A cipher given a salt, encrypts a string by shifiting 
  it up/down the alphabets. Example
  cipher('abcd',2) => 'cdef'
  cipher('cdef,-2) => 'abcd'
  cipher("I love JavaScript!", 100) => "E hkra FwrwOynelp!";
  cipher('E hkra FwrwOynelp!', -100) => "I love JavaScript!";

*/

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
