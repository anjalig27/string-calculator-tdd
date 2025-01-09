class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    const { delimiter, numberString } =
      this._extractDelimitersAndNumbers(numbers);
    const numArray = this._splitAndConvertNumbers(numberString, delimiter);

    this._validateNumbers(numArray);

    return this._calculateSum(numArray);
  }

  _extractDelimitersAndNumbers(numbers) {
    let delimiter = /[\n,]/; // Default delimiters: new lines and commas
    let numberString = numbers;

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const delimiterPart = parts[0];

      delimiter = this._parseCustomDelimiters(delimiterPart);
      numberString = parts.slice(1).join("\n");
    }

    return { delimiter, numberString };
  }

  _parseCustomDelimiters(delimiterPart) {
    if (delimiterPart.includes("[")) {
      const regexDelimiters = delimiterPart
        .match(/(?<=\[)[^\]]+(?=\])/g) // Extract delimiters from brackets
        .map(this._escapeSpecialCharacters) // Escape special regex characters
        .join("|"); // Create regex pattern for multiple delimiters
      return new RegExp(regexDelimiters);
    } else {
      return new RegExp(`[${this._escapeSpecialCharacters(delimiterPart[2])}]`);
    }
  }

  _escapeSpecialCharacters(char) {
    return char.replace(/[-\/\\^$.*+?()[\]{}|]/g, "\\$&");
  }

  _splitAndConvertNumbers(numberString, delimiter) {
    return numberString.split(delimiter).map(Number);
  }

  _validateNumbers(numArray) {
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }
  }

  _calculateSum(numArray) {
    return numArray
      .filter((n) => n <= 1000) // Ignore numbers greater than 1000
      .reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
