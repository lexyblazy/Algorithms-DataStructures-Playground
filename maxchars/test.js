const max = require("./index");

describe("Max Character", () => {
  it("Should return max character", () => {
    expect(max("Hello World!")).toBe("l");
  });

  it("Should return max character", () => {
    expect(max("the grass is not green on the other side")).toBe(" ");
  });
});
