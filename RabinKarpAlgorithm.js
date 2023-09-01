// The Rabin-Karp algorithm is a string searching algorithm that uses hashing to find patterns in a text efficiently. Here's a JavaScript implementation of the Rabin-Karp algorithm:

function rabinKarp(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const prime = 101; // A prime number to use for hashing
  
    // Calculate hash for pattern and the first window in the text
    let patternHash = 0;
    let textHash = 0;
    for (let i = 0; i < patternLength; i++) {
      patternHash += pattern.charCodeAt(i) * Math.pow(prime, i);
      textHash += text.charCodeAt(i) * Math.pow(prime, i);
    }
  
    const result = [];
  
    // Slide the pattern over the text, calculating the hash of each window
    for (let i = 0; i <= textLength - patternLength; i++) {
      if (patternHash === textHash) {
        // If the hashes match, compare the pattern and text substring
        let match = true;
        for (let j = 0; j < patternLength; j++) {
          if (text[i + j] !== pattern[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          result.push(i); // Pattern found at position i
        }
      }
  
      // Calculate the hash for the next window
      if (i < textLength - patternLength) {
        textHash =
          (textHash - text.charCodeAt(i) + text.charCodeAt(i + patternLength)) *
          prime;
      }
    }
  
    return result;
  }
  
  const text = "ABABDABACDABABCABAB";
  const pattern = "ABABCABAB";
  const positions = rabinKarp(text, pattern);
  
  if (positions.length === 0) {
    console.log("Pattern not found in the text.");
  } else {
    console.log(`Pattern found at positions: ${positions.join(", ")}`);
  }
  
//   In this code:

//   rabinKarp function calculates the hash of the pattern and the initial window in the text, and then slides the pattern over the text, updating the hash for each window.
//   If the hash matches, it performs a character-by-character comparison to confirm the match.
//   If a match is found, the starting position of the pattern in the text is added to the result array.
//   The algorithm continues to search for more occurrences of the pattern in the text.
//   You can run this code with your own text and pattern to find the starting positions of the pattern within the text.