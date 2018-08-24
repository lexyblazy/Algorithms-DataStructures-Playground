const _isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
};

const primes = n => {
  const results = [];
  for (var i = 2; i < n; i++) {
    if (_isPrime(i)) {
      results.push(i);
    }
  }
  return results;
};

const primes2 = n => {
  const numbers = new Array(n);
  numbers.fill(true);
  numbers[0] = numbers[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      numbers[i * j] = false;
    }
  }
  return numbers.reduce(
    (acc, value, index) => (value ? acc.concat(index) : acc),
    []
  );
};

module.exports = { primes, primes2 };
