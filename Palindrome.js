const num1 = 121;
const num2 = 12345;

function isPalindromeNumber(number) {
  const numStr = number.toString();
  const length = numStr.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (numStr[i] !== numStr[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(`${num1} is a palindrome: ${isPalindromeNumber(num1)}`);
console.log(`${num2} is a palindrome: ${isPalindromeNumber(num2)}`);
