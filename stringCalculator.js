class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const delimiterPart = numbers.split("\n")[0];
      delimiter = new RegExp(`[${delimiterPart[2]}]`);
      numbers = numbers.split("\n")[1];
    }
    const numArray = numbers.split(delimiter);
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}
module.exports = StringCalculator;
