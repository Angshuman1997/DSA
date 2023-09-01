// Find the sum of all even Fibonacci numbers less than a given limit.

function sumEvenFibonacci(limit) {
  let a = 0,
    b = 1,
    sum = 0;
  while (b < limit) {
    if (b % 2 === 0) {
      sum += b;
    }
    const temp = a;
    a = b;
    b = temp + b;
  }
  return sum;
}

const limit = 4000000;
const evenFibSum = sumEvenFibonacci(limit);
console.log(`Sum of even Fibonacci numbers below ${limit} is ${evenFibSum}`);
