// write a function that accepts an array of integers and a number called n.
// the function should calculate the maximum sum of n consecutive elements in the array.

// Time Complexity === O(n)

function maxSubarraySum(arr, n) {
    if (arr.length < n) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum - arr[j - n] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([-1,-7,7,1,2,-12,9,0,-9],3))