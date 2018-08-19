const { reverse, reverse2 } = require("./index");

test("The reversal of SALINE is ENILAS", () => {
  expect(reverse("saline")).toBe("enilas");
});

test("The reversal of LEVEL is LEVEL", () => {
  expect(reverse("level")).toBe("level");
});
