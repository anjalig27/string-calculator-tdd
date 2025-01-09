const StringCalculator = require("./stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator(); // Create an instance before each test
  });

  // Initial test case for an empty string is passing.
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  // Adding support for a single number.
  test("should return the number when only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  // Implemented addition for two numbers.
  test("should return the sum of two numbers separated by a comma", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  // Enhanced the method to handle multiple numbers.
  test("should return the sum of multiple numbers separated by commas", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  // Added support for new line as a delimiter.
  test("should handle new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  // Implemented custom single character delimiters for addition.
  test("should support custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  // Implemented error handling for single negative number.
  test("should throw an error when negative numbers are provided", () => {
    expect(() => calculator.add("1,-2")).toThrow(
      "Negative numbers not allowed: -2"
    );
  });

  // Enhanced error message for multiple negative numbers.
  test("should throw an exception with all negative numbers listed", () => {
    expect(() => calculator.add("-2,-3")).toThrow(
      "Negative numbers not allowed: -2,-3"
    );
  });

  // Added functionality to ignore numbers above 1000.
  test("should ignore numbers larger than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

  // Handled single type delimiters of variable length.
  test("should support delimiters of any length", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  // Implemented support for multiple delimiters.
  test("supports multiple delimiters", () => {
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
    expect(calculator.add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });
});
