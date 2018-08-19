// maxchars

const maxChars = str => {
  str = str.split("");
  let maxChar = "";
  let maxCharCount = 0;
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  for (const key in chars) {
    if (chars[key] > maxCharCount) {
      maxCharCount = chars[key];
      maxChar = key;
    }
  }
  return maxChar;
};

module.exports = maxChars;
