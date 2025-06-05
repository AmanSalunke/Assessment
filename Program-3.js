function generateConditionalOddSeries(a) {
  let result = [];
  let count = a % 2 === 0 ? a - 1 : a;

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  return result.join(", ");
}


const input = parseInt(prompt("Enter a number:")); 
const output = generateConditionalOddSeries(input);
alert("Output: " + output); 
