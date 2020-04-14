// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater 
// than the sum of the non included elements in such subsequence.
// If there are multiple solutions, return the subsequence with minimum size and if there still 
// exist multiple solutions, return the subsequence with the maximum total sum of all its elements.
// A subsequence of an array can be obtained by erasing some(possibly zero) elements from the array.
// Note that the solution with the given constraints is guaranteed to be unique.
// Also return the answer sorted in non - increasing order.

function subSum(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        arr.sort(function (a, b) {
            return b - a
        })
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        let newArr = [arr[0]]
        let sumNewArr = newArr[0]
        for (let j = 1; j < arr.length; j++) {
            let temp = sum - sumNewArr
            if (sumNewArr <= temp) {
                newArr.push(arr[j])
                sumNewArr += arr[j]
            } else {
                return newArr
            }
        }
    }
}

const nums = [9, 3, 8, 4, 7, 1, 4, 5, 2, 9]

console.log(subSum(nums))