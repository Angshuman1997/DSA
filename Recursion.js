// Problem 1: Factorial Calculation
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // Output: 120

// Problem 2: Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence (first 6 numbers):");
for (let i = 0; i < 6; i++) {
  console.log(fibonacci(i));
}
// Output:
// 0
// 1
// 1
// 2
// 3
// 5

// Problem 3: Recursive Sum of an Array
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(numbers)); // Output: 15

// Problem 4: Recursive Power Calculation
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log("2^5:", power(2, 5)); // Output: 32

// Problem 5: Recursive Palindrome Check
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // Output: true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // Output: false

// Problem 6: Recursive Binary Search
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  return binarySearch(arr, target, start, mid - 1);
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7];
console.log("Index of 4:", binarySearch(sortedArray, 4)); // Output: 3

// Problem 7: Recursive Tower of Hanoi
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

console.log("Tower of Hanoi Steps for 3 disks:");
towerOfHanoi(3, "A", "B", "C");
/* Output:
  Move disk 1 from A to C
  Move disk 2 from A to B
  Move disk 1 from C to B
  Move disk 3 from A to C
  Move disk 1 from B to A
  Move disk 2 from B to C
  Move disk 1 from A to C
  */
