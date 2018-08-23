const { assert } = require("chai");
const { twoSum2, twoSum } = require("./index");

describe("Two Sum", () => {
  it("Should implement two sum", () => {
    assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  });
});

describe("Two Sum", () => {
  it("Should implement two sum - 2", () => {
    assert.deepEqual(twoSum2([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  });
});
