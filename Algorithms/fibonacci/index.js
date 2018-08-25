/**
 * Returns the nth number of a fibonacci series
    recursiveFib(1)=>(1);
    recursiveFib(2)=>(1);
    recursiveFib(3)=>(2);
    recursiveFib(6)=>(8);
    recursiveFib(10)=>(55);
    recursiveFib(20)=>(6765);
    recursiveFib(50)=>(12586269025);
 */

/* 
  * The idea of memomization is to implement caching, 
  * we dont want to rerun the function for values that 
  * we have previously cached,
*/
function _memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const iterativeFib = n => {
  const result = [0, 1];
  for (var i = 2; i <= n; i++) {
    // const next = result[i-1] + result[i-2];
    const next = result[result.length - 1] + result[result.length - 2];
    result.push(next);
  }
  return result[n];
};

const recursiveFib = n =>
  n < 2 ? n : recursiveFib(n - 1) + recursiveFib(n - 2);

let slowFib = n =>
  n < 2 ? n : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
const memoizedFibonacci = _memoize(slowFib);

module.exports = { iterativeFib, recursiveFib, memoizedFibonacci };
