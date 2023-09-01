// Generate the first n Fibonacci numbers in an array.

function generateFibonacciSequence(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const n = 10;
const sequence = generateFibonacciSequence(n);
console.log(sequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
