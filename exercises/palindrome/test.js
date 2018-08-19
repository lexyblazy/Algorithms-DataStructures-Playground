const { palindromes, palindromes2 } = require("./index");

describe("Test for Palindrome", () => {
  it(" 'Cigar? Toss it in a can. It is so tragic' Should return true", () => {
    expect(
      palindromes("Cigar? Toss it in a can. It is so tragic")
    ).toBeTruthy();
  });

  it(" 'sit ad est love' Should return false", () => {
    expect(palindromes("sit ad est love")).toBeFalsy();
  });

  it(" 'race car' Should return true", () => {
    expect(palindromes("race car")).toBeTruthy();
  });

  it(" 'hey partner level' Should return false", () => {
    expect(palindromes("hey partner level")).toBeFalsy();
  });
});

describe("Test for Palindrome2", () => {
  it(" 'Cigar? Toss it in a can. It is so tragic' Should return true", () => {
    expect(
      palindromes2("Cigar? Toss it in a can. It is so tragic")
    ).toBeTruthy();
  });

  it(" 'sit ad est love' Should return false", () => {
    expect(palindromes2("sit ad est love")).toBeFalsy();
  });
  it(" 'race car' Should return true", () => {
    expect(palindromes2("race car")).toBeTruthy();
  });

  it(" 'hey partner level' Should return false", () => {
    expect(palindromes2("hey partner level")).toBeFalsy();
  });
});
