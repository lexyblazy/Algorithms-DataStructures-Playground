/*
  factorial of a number, Example
    factorial(0) => 1;
    factorial(12) => 479001600;
    factorial(20) => 2432902008176640000;
  
*/

//recursive
const factorial = n => (n < 2 ? 1 : n * factorial(n - 1));

// iterative
const factorial2 = n => {
  if (n < 2) return 1;
  let result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result[n];
};

module.exports = { factorial, factorial2 };
