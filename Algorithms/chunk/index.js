const chunk = (arr, size) => {
  const result = [];
  for (var i = 0; i < arr.length; i++) {
    const element = arr[i];
    const last = result[result.length - 1];
    if (!last || last.length === size) {
      result.push([element]);
    } else {
      last.push(element);
    }
  }
  return result;
};

const chunk2 = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const chunk3 = (arr,size) => {
  const times = Math.ceil(arr.length/size);
  const result = [];
  let startIndex = 0;
  let endIndex = size;
  for(let i = 0; i < times;i++){
    result.push(arr.slice(startIndex,endIndex));
    startIndex = endIndex;
    endIndex += size;
  }
  return result;
};

module.exports = { chunk, chunk2, chunk3 };
