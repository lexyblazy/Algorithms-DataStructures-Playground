//chunk

const chunk = (arr, size) => {
  let startIndex = 0;
  let endIndex = size;
  const iterations = Math.ceil(arr.length / size);
  const chunks = [];
  for (var i = 0; i < iterations; i++) {
    chunks.push(arr.slice(startIndex, endIndex));
    startIndex = endIndex;
    endIndex += size;
  }
  return chunks;
};

const chunk2 = (arr, size) => {
  let chunks = [];
  for (var i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const chunk3 = (arr, size) => {
  let chunks = [];
  for (const element of arr) {
    const last = chunks[chunks.length - 1];
    if (!last || last.length === size) {
      chunks.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunks;
};

module.exports = {chunk,chunk2,chunk3}