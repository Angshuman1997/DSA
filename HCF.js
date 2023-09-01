// Highest Common Factor (HCF)

// hcf(a, b): Computes the highest common factor (HCF) or greatest common divisor (GCD) of two numbers using the Euclidean algorithm.

function hcf(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const a = 48;
const b = 18;
const hcfResult = hcf(a, b);

// Output

// In this example, we're calculating the HCF/GCD of 48 and 18.

// The hcf function will return the HCF/GCD of these two numbers, which in this case is 6. Here's how it computes the result using the Euclidean algorithm:

// First iteration: a = 18, b = 12 (remainder of 48 % 18).
// Second iteration: a = 12, b = 6 (remainder of 18 % 12).
// Third iteration: a = 6, b = 0 (remainder of 12 % 6).
// At this point, b becomes 0, and the algorithm stops. The final value of a (which is 6) is the HCF/GCD of 48 and 18.

