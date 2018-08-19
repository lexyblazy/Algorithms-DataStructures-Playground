// factorial
const factorial = number => {
  let result = 1;
  if(number < 2){
    return 1;
  }
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

const factorial2 = number => {
  return number < 2 ? 1 : number * factorial2(number - 1);
};

module.exports = { factorial, factorial2 };
