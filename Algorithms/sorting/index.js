const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// const selectionSort = (arr = []) => {
//   const sorted = [];
//   while (arr.length > 0) {
//     const smallest = Math.min(...arr);
//     sorted.push(smallest);
//     const smallestIndex = arr.indexOf(smallest);
//     arr = arr.slice(0, smallestIndex).concat(arr.slice(smallestIndex + 1));
//   }
//   return sorted;
// };

const selectionSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
};

const merge = (left, right) => {
  const results = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
};

const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
};

module.exports = { bubbleSort, selectionSort, merge, mergeSort };
