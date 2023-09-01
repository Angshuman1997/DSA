function longestCommonSubsequence(str1, str2) {
  const dp = Array.from(Array(str1.length + 1), () =>
    Array(str2.length + 1).fill(0)
  );
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  let i = str1.length,
    j = str2.length;
  let lcs = "";
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return lcs;
}

const str1 = "AGGTAB";
const str2 = "GXTXAYB";

const lcsResult = longestCommonSubsequence(str1, str2);

//   Output:
//   In this example, we're finding the longest common subsequence between the strings "AGGTAB" and "GXTXAYB".

//   The longestCommonSubsequence function will return the LCS, which in this case is "GTAB".

//   Description:

//   The function uses a dynamic programming approach to compute the length of the LCS and reconstruct the LCS string itself.
//   It creates a 2D array dp where dp[i][j] represents the length of the LCS between the first i characters of str1 and the first j characters of str2.
//   It iterates through both strings, comparing characters:
//   If str1[i - 1] and str2[j - 1] are equal, it increments dp[i][j] by one.
//   Otherwise, it takes the maximum of dp[i - 1][j] and dp[i][j - 1].
//   After building the dp table, the function backtracks to reconstruct the LCS string:
//   Starting from the bottom-right corner (i and j equal to the lengths of str1 and str2), it moves diagonally up-left if the characters match, adding the character to the LCS string.
//   If characters do not match, it moves in the direction of the greater value in the dp table.
//   Finally, the LCS string is returned.
//   Output Explanation:

//   The LCS between "AGGTAB" and "GXTXAYB" is "GTAB". This means that "GTAB" is the longest subsequence that appears in both strings while maintaining their relative order.
