// write a function which accepts a sorted array of integers.
// the function should find the first pair where the sum is 0.
// return an array that includes both values that sum to zero or undefined if a pair does not exist.


// OPTION 1 | Time complexity === O(n^2) | Space Complexity === O(1)

function pairSumZero1(array) {
    // check the array has min length 2
    if (array.length < 2) {
        return undefined;
    }
    // loop the array to find the match
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return [array[i], array[j]];
            }
        }
    }
    return undefined;
}

console.log(pairSumZero1([-2, 0, 1, 2, 3]))

// OPTION 2 | Time complexity === O(n) | Space Complexity === O(1)

function pairSumZero2(array) {
    // check the array has min length 2
    if (array.length < 2) {
        return undefined;
    }
    let left = 0;
    let right = array.length - 1;
    // make the sum and compare 
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

console.log(pairSumZero2([-3, -2, 0, 1, 2, 3, 4, 5]))