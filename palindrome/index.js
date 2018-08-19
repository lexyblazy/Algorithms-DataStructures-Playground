// check for palindromes
const _cleanString = str => str.replace(/[^a-zA-Z]/g, "").toLowerCase();

const palindromes = str => {
  str = _cleanString(str);
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
};

const palindromes2 = str => {
  str = _cleanString(str);
  return str
    .split("")
    .every((value, index) => value === str[str.length - index - 1]);
};

module.exports = { palindromes, palindromes2 };
