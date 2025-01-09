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

// Implemented addition for two numbers.
test("should return the sum of two numbers separated by a comma", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

// Enhanced the method to handle multiple numbers.
test("should return the sum of multiple numbers separated by commas", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3,4")).toBe(10);
});

// Added support for new line as a delimiter.
test("should handle new lines as delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});
