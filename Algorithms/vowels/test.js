const { assert } = require("chai");
const { vowels, vowels2 } = require("./index");
describe("Vowels", () => {
  it("Should count vowels", () => {
    assert.equal(vowels("hello world"), 3);
  });
});

describe("Vowels2", () => {
  it("Should count vowels", () => {
    assert.equal(vowels2("hello world"), 3);
  });
});
