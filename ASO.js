// String Manipulation
const str1 = "Hello";
const str2 = "World";
const combinedStr = str1 + " " + str2; // Concatenation
const subStr = combinedStr.substring(0, 5); // Substring
const replacedStr = combinedStr.replace("World", "JavaScript"); // Replace

console.log("String Manipulation:");
console.log("Combined String:", combinedStr);
console.log("Substring:", subStr);
console.log("Replaced String:", replacedStr);

// Array Manipulation
const arr = [1, 2, 3];
arr.push(4); // Add Elements
arr.pop(); // Remove Elements
arr.unshift(0); // Add at the Beginning
arr.shift(); // Remove from the Beginning

console.log("\nArray Manipulation:");
console.log("Array:", arr);

// Iterating Over an Array
const numbers = [1, 2, 3];
console.log("Iterating Over an Array:");
for (const num of numbers) {
  console.log(num);
}

// Sorting an Array
const unsortedArr = [3, 1, 2];
const sortedArr = unsortedArr.slice().sort(); // Create a copy to avoid modifying the original
console.log("\nSorting an Array:");
console.log("Sorted Array:", sortedArr);

// Object Manipulation
const person = { name: "John", age: 30 };
person.age = 31; // Property Modification
person.country = "USA"; // Adding Properties

console.log("\nObject Manipulation:");
console.log("Person Object:", person);

// Iterating Over Object Properties
console.log("Iterating Over Object Properties:");
for (const key in person) {
  console.log(key, person[key]);
}

// Algorithms (Finding Maximum in an Array)
const numbersArr = [5, 3, 8, 1, 6, 9];
let max = numbersArr[0];

for (const num of numbersArr) {
  if (num > max) {
    max = num;
  }
}

console.log("\nAlgorithm (Finding Maximum in an Array):");
console.log("Maximum Number:", max);
