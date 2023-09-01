// Knapsack Problem (0/1 Knapsack)

// knapsack(values, weights, capacity): Solves the 0/1 Knapsack problem, where you have a set of items with values and weights, and you need to determine the maximum value that can be obtained while keeping the total weight within a given capacity.

function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [60, 100, 120]; // Values of the items
const weights = [10, 20, 30]; // Weights of the items
const capacity = 50; // Maximum weight capacity of the knapsack
const maxValue = knapsack(values, weights, capacity);

// Output

// In this example, we have three items with corresponding values and weights, and we want to determine the maximum value that can be obtained with a knapsack of capacity 50.

// The knapsack function will return the maximum value, which in this case is 220. Here's how it computes the result:

// The optimal solution is to take the first and third items (values 60 and 120) while leaving the second item (value 100) because it is too heavy to fit within the knapsack's capacity. The total value of the selected items is 60 + 120 = 180.
// So, the maximum value that can be obtained with a knapsack of capacity 50 is 220.
