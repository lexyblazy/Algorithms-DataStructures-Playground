const { chunk, chunk2, chunk3 } = require("./index");

describe("Should implement array chunking 1", () => {
  test("Chunk Implemenatation 1", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });
});
describe("Should implement array chunking 1", () => {
  test("Chunk Implemenatation 2", () => {
    expect(chunk2([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk2([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk2([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });
});

describe("Should implement array chunking 1", () => {
  test("Chunk Implemenatation 3", () => {
    expect(chunk3([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk3([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk3([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });
});
