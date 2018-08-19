const { anagrams, anagrams2 } = require("./index");

describe("Should check for anagrams", () => {
  test("anagram function exists", () => {
    expect(typeof anagrams).toEqual("function");
  });

  test("anagram function exists", () => {
    expect(typeof anagrams2).toEqual("function");
  });

  test("Sailed is an anagram of aisled", () => {
    expect(anagrams("sailed", "aisled")).toBe(true);
  });

  test("Sailed is an anagram of aisled", () => {
    expect(anagrams2("sailed", "aisled")).toBe(true);
  });

  test("Mailers is an anagram of Realism", () => {
    expect(anagrams("maile456rs", "Realism")).toBe(true);
  });

  test("Mailers is an anagram of Realism", () => {
    expect(anagrams2("maile456rs", "Realism")).toBe(true);
  });

  test("Derailments is not an anagram of Streamline", () => {
    expect(anagrams("Derailments", "Streamline")).toBe(false);
  });

  test("Derailments is not an anagram of Streamline", () => {
    expect(anagrams2("Derailments", "Streamline")).toBe(false);
  });
});
