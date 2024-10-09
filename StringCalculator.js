class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    // Check for custom delimiter definition
    const res = this.customDelimeters(numbers);

    // Handle negative numbers
    this.negativesNumber(res);

    // Sum the numbers, ignoring those greater than 1000
    return res.filter((n) => n <= 1000).reduce((sum, num) => sum + num, 0);
  }

  negativesNumber(numArray) {
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }
  }

  customDelimeters(numbers) {
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const delimiterPart = parts[0]; // This part will contain the custom delimiter(s)

      // Check for multiple delimiters
      if (delimiterPart.includes("[")) {
        const regexDelimiters = delimiterPart
          .match(/(?<=\[)[^\]]+(?=\])/g) // Extract delimiters from brackets
          .map((d) => d.replace(/[-\/\\^$.*+?()[\]{}|]/g, "\\$&")) // Escape special regex characters
          .join("|"); // Create regex pattern
        delimiter = new RegExp(regexDelimiters); // Create regex for multiple delimiters
      } else {
        delimiter = new RegExp(`[${delimiterPart[2]}]`); // Handle single character delimiter
      }

      // Get the numbers part after the first line
      numbers = parts.slice(1).join("\n");
    }
    const numArray = numbers.split(delimiter).map(Number);
    return numArray;
  }
}

module.exports = StringCalculator;
