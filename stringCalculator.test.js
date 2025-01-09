const StringCalculator = require("./stringCalculator");

// Initial test case for an empty string is passing.
test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});
