const { assert } = require("chai");
const reverseWords = require("./index");

describe("Reverse Words", () => {
  it("Should reverse words", () => {
    assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
  });
});
