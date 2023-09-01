// Backtracking Algorithm (N-Queens Problem):

// solveNQueens(n): Solves the N-Queens problem using backtracking, returning all possible solutions for placing n queens on an n x n chessboard without threatening each other.

function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return result;
}

const n = 4; // The chessboard size and the number of queens.
const solutions = solveNQueens(n);
console.log(solutions);

// Output
// [
//     [
//       ".Q..",
//       "...Q",
//       "Q...",
//       "..Q."
//     ]
// ]
