// Least Common Multiple (LCM)

// gcd(a, b): This function calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
// lcm(a, b): Calculates the least common multiple (LCM) of two numbers using the GCD function.

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const a = 12;
const b = 18;

const gcdResult = gcd(a, b);
const lcmResult = lcm(a, b);

// Output

// In this example, we're calculating both the greatest common divisor (GCD) and the least common multiple (LCM) of 12 and 18.

// GCD (Greatest Common Divisor):

// The gcd function calculates the GCD of 12 and 18 using the Euclidean algorithm.
// The GCD of 12 and 18 is 6.
// LCM (Least Common Multiple):

// The lcm function calculates the LCM of 12 and 18 by dividing their product by their GCD.
// The LCM of 12 and 18 is (12 * 18) / 6 = 36.
// So, the results are:

// gcdResult is 6 (the GCD of 12 and 18).
// lcmResult is 36 (the LCM of 12 and 18).