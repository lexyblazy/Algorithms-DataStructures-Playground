const maxChars = str => {
  let maxChar = '';
  let maxCharCount = 0
  str = str.toLowerCase().replace(/[^a-z /s]/g,'');
  const map = {};
  for(let el of str){
    map[el] = map[el] + 1 || 1
  }
  for(let key in map){
    if(map[key] > maxCharCount){
      maxCharCount = map[key];
      maxChar = key;
    }
  }
  return maxChar;
};

module.exports = maxChars;
