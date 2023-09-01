const num3 = 153;
const num4 = 370;

function isArmstrongNumber(number) {
  const numStr = number.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return number === sum;
}

console.log(`${num3} is an Armstrong number: ${isArmstrongNumber(num3)}`);
console.log(`${num4} is an Armstrong number: ${isArmstrongNumber(num4)}`);
