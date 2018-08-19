const _capWord = str => str[0].toUpperCase() + str.slice(1);

const capitalize = str =>
  str
    .split(" ")
    .map(w => _capWord(w))
    .join(" ");

const capitalize2 = str => {
  str = str.split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if(i==0 || str[i - 1] === " "){
      result += str[i].toUpperCase()
    }else{
      result += str[i];
    }
  }
  return result;
};

module.exports = { capitalize, capitalize2 };
