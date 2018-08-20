/*
a quick an obvious solution is loop through the array
from the end, and push the result into a new reversed array
*/
const reverse = arr => {
  const reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed[i] = arr[arr.length - i - 1];
  }
  return reversed;
};

/*
const reverse2 = arr => arr.reverse(); 
This is cheating LOL..
*/

/*
another solution is to loop through half of the array
and swap the values with the other end
*/

const reverse2 = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length -i- 1] = temp;
  }
  return arr;
};

module.exports = { reverse, reverse2 };
