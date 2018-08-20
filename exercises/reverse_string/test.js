const { reverse, reverse2 } = require("./index");

describe("String reversal 1", () => {
  test("The reversal of SALINE is ENILAS", () => {
    expect(reverse("saline")).toBe("enilas");
  });
});
describe("String reversal 2", () => {
  test("The reversal of LEVEL is LEVEL", () => {
    expect(reverse2("levels")).toBe("slevel");
  });
});
