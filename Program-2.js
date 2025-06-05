function generateOddSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
}


const input = parseInt(prompt("Enter a number:"));  
const output = generateOddSeries(input);
alert("Output: " + output);  
