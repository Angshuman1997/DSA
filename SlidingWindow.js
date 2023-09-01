// Sliding Window Technique (Maximum Sum Subarray)

// maxSumSubarray(arr, k): Finds the maximum sum of a subarray of fixed size k in an array using the sliding window technique.

function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

const maxSum = maxSumSubarray(arr, k);

// Output:
// In this example, we have an array [2, 1, 5, 1, 3, 2] and want to find the maximum sum of a subarray of size 3.

// The maxSumSubarray function will return the maximum sum, which in this case is 9. Here's how it computes the result:

// The initial window of size k is [2, 1, 5], and its sum is 2 + 1 + 5 = 8.
// As it slides to the right, the window becomes [1, 5, 1], and its sum is 1 + 5 + 1 = 7.
// Finally, the window becomes [5, 1, 3], and its sum is 5 + 1 + 3 = 9.
// The maximum sum of any subarray of size 3 within the given array is 9.
