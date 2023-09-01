// Determine if a given number is part of the Fibonacci sequence.

function isFibonacciNumber(num) {
  if (num < 2) return true;
  let a = 0,
    b = 1;
  while (b < num) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return b === num;
}

const numToCheck = 8;
const isFibonacci = isFibonacciNumber(numToCheck);
console.log(`${numToCheck} is${isFibonacci ? "" : " not"} a Fibonacci number.`);
