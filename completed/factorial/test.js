const { factorial, factorial2 } = require("./index");

describe("This should implement the factorial", () => {
  test("Factorial of 0 is 1", () => {
    expect(factorial(0)).toBe(1);
  });
  test("Factorial of 12 is 479001600", () => {
    expect(factorial(12)).toBe(479001600);
  });
  test("Factorial of 20 is 2432902008176640000", () => {
    expect(factorial(20)).toBe(2432902008176640000);
  });
  test("Factorial of 1 is 1", () => {
    expect(factorial2(1)).toBe(1);
  });
  test("Factorial of 12 is 479001600", () => {
    expect(factorial2(12)).toBe(479001600);
  });
  test("Factorial of 20 is 2432902008176640000", () => {
    expect(factorial2(20)).toBe(2432902008176640000);
  });
});
