/*
Anagrams 
 check whether two strings are anagrams of each other
Example
  mailers ==> realism,
  cat ==> act


*/

const _transform = str =>
  str
    .toLowerCase()
    .replace(/[^a-zA-z]/g, "")
    .split("")
    .sort()
    .join();

const _buildMap = str => {
  const map = {};
  str = str.toLowerCase().replace(/[^a-zA-z]/g, "");
  for (let el of str) {
    map[el] = map[el] + 1 || 1;
  }
  return map;
};

const anagrams = (str1, str2) => _transform(str1) === _transform(str2);

const anagrams2 = (str1, str2) => {
  str1 = _buildMap(str1);
  str2 = _buildMap(str2);

  if (Object.keys(str1).length !== Object.keys(str2).length) {
    return false;
  }
  for (let key in str1) {
    if (str1[key] !== str2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = { anagrams, anagrams2 };
