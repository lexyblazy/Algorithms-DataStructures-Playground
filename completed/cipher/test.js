const cipher = require("./index");

describe("This should test Cipher Algorithm", () => {
  test("Should shift to the right", () => {
    expect(cipher("I love JavaScript!", 100)).toBe("E hkra FwrwOynelp!");
  });
  test("Should shift to the left", () => {
    expect(cipher("I love JavaScript!", -100)).toBe("M pszi NezeWgvmtx!");
  });
});
