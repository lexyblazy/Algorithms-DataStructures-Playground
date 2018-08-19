// Anagrams

const _sort = str =>
  str
    .replace(/[^a-zA-z]/gi, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
const _buildCharMap = str => {
  let charMap = {};
  for (let el of str) {
    charMap[el] = charMap[el] + 1 || 1;
  }
  return charMap;
};

const anagrams = (str1, str2) => _sort(str1) === _sort(str2);

const anagrams2 = (str1, str2) => {
  const map1 = _buildCharMap(str1.toLowerCase().replace(/[^a-zA-z]/gi, ""));
  const map2 = _buildCharMap(str2.toLowerCase().replace(/[^a-zA-z]/gi, ""));
  if (Object.keys(map1).length !== Object.keys(map2).length) return false;

  for (let char in map1) {
    if (map1[char] !== map2[char]) {
      return false;
    }
  }
  return true;
};

module.exports = { anagrams, anagrams2 };
