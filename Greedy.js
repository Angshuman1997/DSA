// Greedy Algorithm (Coin Change)

// greedyCoinChange(coins, amount): Uses a greedy approach to find the minimum number of coins needed to make up a given amount using a set of coin denominations.

function greedyCoinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;
  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return count;
}

const coins = [25, 10, 5, 1]; // Coin denominations (quarters, dimes, nickels, pennies)
const amount = 63; // Amount to make change for (in cents)
const minimumCoins = greedyCoinChange(coins, amount);


// Output

// In this example, we're trying to make change for 63 cents using the coin denominations [25, 10, 5, 1] (quarters, dimes, nickels, pennies).

// The greedyCoinChange function will return the minimum number of coins required, which in this case is 6 coins. Here's how it computes the result:

// Use one quarter (25 cents).
// Use one dime (10 cents).
// Use three pennies (1 cent each).
// So, a total of 6 coins is needed to make change for 63 cents using the provided coin denominations.