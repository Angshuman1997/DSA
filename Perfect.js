// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. The smallest perfect number is 6, which is the sum of its divisors 1, 2, and 3.

// Here's a JavaScript function to check if a given number is a perfect number:

function isPerfectNumber(number) {
  if (number <= 1) {
    return false; // Perfect numbers are greater than 1
  }

  let sum = 1; // Start with 1 since every number is divisible by 1

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      sum += i;
      if (i !== number / i) {
        sum += number / i;
      }
    }
  }

  return sum === number;
}

// Test cases
console.log("Is 6 a perfect number?", isPerfectNumber(6)); // true
console.log("Is 28 a perfect number?", isPerfectNumber(28)); // true
console.log("Is 12 a perfect number?", isPerfectNumber(12)); // false

// In this code:

// We start with an initial sum of 1 because every number is divisible by 1.

// We iterate through numbers from 2 up to the square root of the given number. For each divisor i, if number % i is zero, it means i is a divisor. We add i to the sum and also add number / i if it's not equal to i.

// Finally, we compare the sum with the original number. If they are equal, it's a perfect number; otherwise, it's not.

// You can use the isPerfectNumber function to check whether a given number is a perfect number in JavaScript.
