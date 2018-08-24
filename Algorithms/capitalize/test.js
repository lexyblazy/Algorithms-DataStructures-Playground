const { capitalize, capitalize2 } = require("./index");

describe("Should TitleCase a Sentence 1", () => {
  test(" 'my name is kurosaki ichigo' in title case should be 'My Name Is Kurosaki Ichigo' ", () => {
    expect(capitalize("my name is kurosaki ichigo")).toBe(
      "My Name Is Kurosaki Ichigo"
    );
  });

  test("'hello world' in title case should be 'Hello World' ", () => {
    expect(capitalize("hello world")).toBe("Hello World");
  });
});

describe("Should titlecase a sentence 2", () => {
  test(" 'my name is kurosaki ichigo' in title case should be 'My Name Is Kurosaki Ichigo' ", () => {
    expect(capitalize2("my name is kurosaki ichigo")).toBe(
      "My Name Is Kurosaki Ichigo"
    );
  });

  test("'hello world' in title case should be 'Hello World' ", () => {
    expect(capitalize2("hello world")).toBe("Hello World");
  });
});
