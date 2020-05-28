// write a function that takes a sorted array of integers and a value,
// and returns the indes where the value is located.
// if the value is not found return -1.

// OPTION 1 | Time complexity === O(n) -> Linear search

function searchIndex1(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(searchIndex1([1, 2, 3, 4, 5, 6], 6))

// OPTION 2 | Time complexity === log(n) -> Binary search

function searchIndex2(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(searchIndex2([1, 2, 3, 4, 5, 6, 7], 7))