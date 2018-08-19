//reverse array
const reverse = arr => {
  let reversed = [];
  for (var i = 0; i < arr.length; i++) {
    reversed[i] = arr[arr.length - i - 1];
  }
  return reversed;
};


const reverse2 = arr => {
  for (var i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
};

module.exports = {reverse,reverse2}