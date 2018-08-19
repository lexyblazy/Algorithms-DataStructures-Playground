const {assert} = require("chai");
const { reverse, reverse2 } = require("./index");

describe("Reverse Arrays", () => {
  it("Should reverse arrays implementation 1", () => {
    assert.deepEqual(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });

  it("Should reverse arrays implementation 2", () => {
    assert.deepEqual(reverse2([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(reverse2([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });
});
