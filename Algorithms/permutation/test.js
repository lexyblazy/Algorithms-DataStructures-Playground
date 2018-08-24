const permutation = require("./index");

describe("Returns all the permutations of a given string", () => {

  it("Should return the permutations of ab", () => {
    expect(permutation("ab")).toEqual(["ab", "ba"]);
  });
  it("Should return the permutations of abc", () => {
    expect(permutation("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba"
    ]);
  });
  it("Should return the permutations of abcd", () => {
    expect(permutation("abcd")).toEqual([
      "abcd",
      "abdc",
      "acbd",
      "acdb",
      "adbc",
      "adcb",
      "bacd",
      "badc",
      "bcad",
      "bcda",
      "bdac",
      "bdca",
      "cabd",
      "cadb",
      "cbad",
      "cbda",
      "cdab",
      "cdba",
      "dabc",
      "dacb",
      "dbac",
      "dbca",
      "dcab",
      "dcba"
    ]);
  });
});
