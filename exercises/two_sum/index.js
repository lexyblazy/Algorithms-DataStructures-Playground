/*An obvious solution is to use a double nested for loops
but this gives an O(n^2) complexity, 
which we want to avoid at all costs

const twoSum = (arr, sum) => {
  const pairs = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] === sum - arr[i]) {
        pairs.push([arr[j], arr[i]]);
      }
    }
  }
  return pairs;
};
*/

function twoSum(arr, sum) {
  const store = [];
  const pairs = [];
  for (let part1 of arr) {
    const part2 = sum - part1;
    if (store.includes(part2)) {
      pairs.push([part1, part2]);
    }
    store.push(part1);
  }
  return pairs;
}

function twoSum2(arr, sum) {
  const map = {};
  const pairs = [];
  for (let part1 of arr) {
    if (map[part1]) {
      pairs.push([part1, map[part1]]);
    } else {
      map[sum - part1] = part1;
    }
  }
  return pairs;
}

module.exports = { twoSum, twoSum2 };
