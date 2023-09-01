// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

// Function to find prime divisors of a number
function findPrimeDivisors(number) {
  const divisors = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      divisors.push(i);
    }
  }
  return divisors;
}

const num = 56; // Example number
const primeDivisors = findPrimeDivisors(num);
console.log(`Prime divisors of ${num}: ${primeDivisors.join(", ")}`);
