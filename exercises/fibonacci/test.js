const { iterativeFib, recursiveFib, memoizedFibonacci } = require("./index");

describe("It should test the Iterative fibonnaci", () => {
  test("calculates correct fib value for 1", () => {
    expect(iterativeFib(1)).toBe(1);
  });
  test("calculates correct fib value for 2", () => {
    expect(iterativeFib(2)).toBe(1);
  });

  test("calculates correct fib value for 3", () => {
    expect(iterativeFib(3)).toBe(2);
  });

  test("calculates correct fib value for 6", () => {
    expect(iterativeFib(6)).toBe(8);
  });

  test("calculates correct fib value for 10", () => {
    expect(iterativeFib(10)).toBe(55);
  });
  test("calculates correct fib value for 20", () => {
    expect(iterativeFib(20)).toBe(6765);
  });
  test("calculates correct fib value for 50", () => {
    expect(iterativeFib(50)).toBe(12586269025);
  });
});

describe("It should test the Recursive fibonnaci", () => {
  test("calculates correct fib value for 1", () => {
    expect(recursiveFib(1)).toBe(1);
  });
  test("calculates correct fib value for 2", () => {
    expect(recursiveFib(2)).toBe(1);
  });

  test("calculates correct fib value for 3", () => {
    expect(recursiveFib(3)).toBe(2);
  });

  test("calculates correct fib value for 6", () => {
    expect(recursiveFib(6)).toBe(8);
  });

  test("calculates correct fib value for 10", () => {
    expect(recursiveFib(10)).toBe(55);
  });

  test("calculates correct fib value for 20", () => {
    expect(recursiveFib(20)).toBe(6765);
  });

    test("calculates correct fib value for 50", () => {
      expect(recursiveFib(50)).toBe(12586269025);
    });
});

describe("It should test the Memoized fibonnaci", () => {
  test("calculates correct fib value for 1", () => {
    expect(memoizedFibonacci(1)).toBe(1);
  });
  test("calculates correct fib value for 2", () => {
    expect(memoizedFibonacci(2)).toBe(1);
  });

  test("calculates correct fib value for 3", () => {
    expect(memoizedFibonacci(3)).toBe(2);
  });

  test("calculates correct fib value for 6", () => {
    expect(memoizedFibonacci(6)).toBe(8);
  });

  test("calculates correct fib value for 10", () => {
    expect(memoizedFibonacci(10)).toBe(55);
  });

  test("calculates correct fib value for 20", () => {
    expect(memoizedFibonacci(20)).toBe(6765);
  });

  test("calculates correct fib value for 50", () => {
    expect(memoizedFibonacci(50)).toBe(12586269025);
  });
  test("calculates correct fib value for 100", () => {
    expect(memoizedFibonacci(100)).toBe(354224848179262000000);
  });
});
