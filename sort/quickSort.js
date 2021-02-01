// write a function that takes an unsorted array and return it sorted

const pivot = (arr) => {

    let pivotIdx = 0;
    let max;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[0]) {
            pivotIdx += 1;
        } else {
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
        }
    }
    // console.log(pivotIdx)
    [arr[0], arr[pivotIdx-2]] = [arr[pivotIdx-2], arr[0]]
    return arr;
}

console.log(pivot([6, 1, 8, 2, 7, 3, 9, 4, 5]))