const { assert } = require("chai");

const spiral = require("./index");
describe("Matrix Spiral", () => {
  it("Should implement matrix spiral", () => {
    assert.deepEqual(spiral(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });

  it("Should implement matrix spiral", () => {
    assert.deepEqual(spiral(4), [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
    ]);
  });
});
