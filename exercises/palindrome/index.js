const _clean = str => str.replace(/[^a-zA-z]/g, "").toLowerCase();

const palindromes = str1 => {
  return (
    _clean(str1)
      .split("")
      .reverse()
      .join("") === _clean(str1)
  );
};

const palindromes2 = str => {
  str = _clean(str);
  return str.split("").every((s, index) => s === str[str.length - 1 - index]);
};
module.exports = { palindromes, palindromes2 };
