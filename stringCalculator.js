class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const delimiterPart = numbers.split("\n")[0];
      delimiter = new RegExp(`[${delimiterPart[2]}]`);
      numbers = numbers.split("\n")[1];
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
