/**
 * Print all the permutations of a string .for example
 * permutation('ab') => ['ab','ba'];
 * permutation('abc') => ['abc','acb','bac','bca','cab','cba']
 * permutation('abcd') => ['abcd','abdc','acbd','acdb','adbc','adcb','bacd','badc','bcad','bcda','bdac','bdca','cabd','cadb','cbad','cbda','cdab','cdba','dabc','dacb','dbac','dbca','dcab','dcba']
 */
const permutation = str => {
  // this is the base case
  if (str.length < 2) return str;
  const permutations = [];
  for (var i = 0; i < str.length; i++) {
    const char = str[i];

    // to avoid duplicates
    if (str.indexOf(char) !== i) continue; //we skip the current iteration
    const remainder = str.slice(0, i) + str.slice(i + 1, str.length);
    for (let subPerm of permutation(remainder)) {
      permutations.push(char + subPerm);
    }
  }
  return permutations;
};

module.exports = permutation;
