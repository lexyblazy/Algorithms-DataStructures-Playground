const ransomNote = require("./index");

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Test for RansomNote", () => {
  it("Should return true", () => {
    expect(ransomNote(magazine, "sit ad est sint")).toBeTruthy();
  });

  it("Should return false", () => {
    expect(ransomNote(magazine, "sit ad est love")).toBeFalsy();
  });

  it("Should return true", () => {
    expect(ransomNote(magazine, "sit ad est sint in in")).toBeTruthy();
  });

  it("Should return false", () => {
    expect(ransomNote(magazine, "sit ad est sint in in in in")).toBeFalsy();
  });
});
