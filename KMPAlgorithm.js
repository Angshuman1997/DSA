// The Knuth-Morris-Pratt (KMP) algorithm is used for substring searching within a longer string. It is an efficient algorithm that avoids unnecessary character comparisons by taking advantage of previously matched characters. Here's a JavaScript implementation of the KMP algorithm:

function buildKMPTable(pattern) {
  const table = new Array(pattern.length).fill(0);
  let j = 0; // Length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = table[j - 1];
    }

    if (pattern[i] === pattern[j]) {
      j++;
    }

    table[i] = j;
  }

  return table;
}

function KMPSearch(text, pattern) {
  const table = buildKMPTable(pattern);
  const result = [];
  let j = 0; // Index for the pattern

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = table[j - 1];
    }

    if (text[i] === pattern[j]) {
      j++;
    }

    if (j === pattern.length) {
      // Pattern found, add the starting index to the result
      result.push(i - j + 1);
      j = table[j - 1]; // Continue searching for more occurrences
    }
  }

  return result;
}

const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const positions = KMPSearch(text, pattern);

if (positions.length === 0) {
  console.log("Pattern not found in the text.");
} else {
  console.log(`Pattern found at positions: ${positions.join(", ")}`);
}

//   In this code:

//   buildKMPTable function builds a partial match table (also known as the "failure function" or "pi function") for the given pattern.
//   KMPSearch function uses the KMP algorithm to search for occurrences of the pattern within the text and returns an array of starting positions where the pattern is found.
//   You can run this code with your own text and pattern to find the starting positions of the pattern within the text.
