// iterative fibonacci

// linear time and space
const iterativeFib = n => {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const next = result[i - 1] + result[i - 2];
    result.push(next);
  }
  return result[n];
};

const recursiveFib = n =>
  n < 2 ? n : recursiveFib(n - 1) + recursiveFib(n - 2);

// recursive slow fib

let slowFib = n =>
  n < 2 ? n : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
const memoizedFibonacci = memoize(slowFib);

function memoize(fn = () => {}) {
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

module.exports = { iterativeFib, recursiveFib, memoizedFibonacci };
