// write a function that takes an unsorted array and return it sorted

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        for (j; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

console.log(insertionSort([5,7,2,3,1,4]))
var =