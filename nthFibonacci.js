// Compute the nth Fibonacci number efficiently using dynamic programming.

function fibonacci(n) {
    if (n <= 1) {
      return n; // Base cases: F(0) = 0, F(1) = 1
    }
  
    // Create an array to store Fibonacci numbers from 2 to n
    const fib = new Array(n + 1);
  
    // Initialize the base cases
    fib[0] = 0;
    fib[1] = 1;
  
    // Calculate Fibonacci numbers from 2 to n
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib[n]; // Return the nth Fibonacci number
  }
  
  // Example usage:
  const n = 10;
  const result = fibonacci(n);
  console.log(`The ${n}th Fibonacci number is: ${result}`);
  