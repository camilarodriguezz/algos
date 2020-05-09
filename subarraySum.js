// Given an array of integers and an integer k,
// you need to find the total number of continuous subarrays whose sum equals to k.

// Example :
// Input:nums = [1,1,1], k = 2
// Output: 2
 
// Constraints:

// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] 
// and the range of the integer k is [-1e7, 1e7].

var subarraySum = function(nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length-1; i++) {
        if ((nums[i]+nums[i+1]) == k) {
            counter+=1
        }
    }
    return counter
};

console.log(subarraySum([1,2,1,1,2], 3))