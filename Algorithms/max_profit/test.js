const maxProfit = require("./index");
const { assert } = require("chai");

describe("Max Profit", () => {
  it("Should return minimum buy price and maximum sell price", () => {
    assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
    assert.deepEqual(maxProfit([1, 3, 2, 5, 4]), [1, 5]);
  });
});
