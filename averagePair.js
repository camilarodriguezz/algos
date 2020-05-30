// write a function that accepts a sorted array and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// there may be more than one pair that matches.

// Time complexity === O(n) | Space Complexity === O(1)

function averagePair(arr, target) {
    if (arr.length <= 1) {
        return false;
    }
    let left = 0;
    let right = arr.length - 1;
    target = target * 2;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return true;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 9))