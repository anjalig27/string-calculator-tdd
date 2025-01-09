const StringCalculator = require("./stringCalculator");

// Initial test case for an empty string is passing.
test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

// Adding support for a single number.
test("should return the number when only one number is provided", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});
