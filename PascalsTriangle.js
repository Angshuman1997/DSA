// Pascal's Triangle is a mathematical pattern where each number is the sum of the two numbers directly above it. Here's a JavaScript function to generate Pascal's Triangle up to a specified number of rows:

function generatePascalsTriangle(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1); // The first and last element of each row is always 1
      } else {
        // Other elements are the sum of the two numbers above
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    triangle.push(row);
  }

  return triangle;
}

function printPascalsTriangle(triangle) {
  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i];
    const spacing = " ".repeat((triangle.length - i - 1) * 3);
    console.log(spacing + row.join(" "));
  }
}

const numRows = 5; // Change this to the number of rows you want
const pascalsTriangle = generatePascalsTriangle(numRows);
printPascalsTriangle(pascalsTriangle);

//   This code defines two functions:

//   generatePascalsTriangle: This function generates Pascal's Triangle up to the specified number of rows and returns it as a 2D array.

//   printPascalsTriangle: This function prints the Pascal's Triangle in a formatted way, aligning the numbers to create the triangle shape.

//   You can change the numRows variable to specify the number of rows you want in your Pascal's Triangle and then run the code to generate and display the triangle.
