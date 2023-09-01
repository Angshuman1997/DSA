// Permutations and Combinations

// factorial(n): Calculates the factorial of a number.
// permutationsCount(n, r): Computes the number of permutations of n items taken r at a time.
// combinationsCount(n, r): Computes the number of combinations of n items taken r at a time.

function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function permutationsCount(n, r) {
  return factorial(n) / factorial(n - r);
}

function combinationsCount(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

const n = 5;
const r = 3;

const factorialResult = factorial(n);
const permutationsResult = permutationsCount(n, r);
const combinationsResult = combinationsCount(n, r);

// Output:
// In this example, we're performing calculations related to factorials, permutations, and combinations with n set to 5 and r set to 3.

// Factorial Calculation:

// The factorial function calculates the factorial of 5, which is 5! = 5 * 4 * 3 * 2 * 1 = 120.
// Permutations Calculation:

// The permutationsCount function calculates the number of permutations of 5 items taken 3 at a time, which is 5P3 = 60. This represents the number of ways to arrange 3 items out of 5 without repetition.
// Combinations Calculation:

// The combinationsCount function calculates the number of combinations of 5 items taken 3 at a time, which is 5C3 = 10. This represents the number of ways to choose 3 items out of 5 without regard to the order.
// So, the results are:

// factorialResult is 120 (the factorial of 5).
// permutationsResult is 60 (the number of permutations of 5 items taken 3 at a time).
// combinationsResult is 10 (the number of combinations of 5 items taken 3 at a time).
