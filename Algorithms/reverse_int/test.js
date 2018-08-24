const reverseInt = require("./index");

test("21 Reversed is 12", () => {
  expect(reverseInt(12)).toBe(21);
});

test("5300 Reversed is 35", () => {
  expect(reverseInt(-5300)).toBe(-35);
});
