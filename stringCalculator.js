class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/; // Default delimiters are new lines and commas

    // Check for custom delimiter definition
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

    // Split the numbers based on the defined delimiter
    const numArray = numbers.split(delimiter).map(Number);

    // Handle negative numbers
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    // Sum the numbers, ignoring those greater than 1000
    return numArray.filter((n) => n <= 1000).reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
