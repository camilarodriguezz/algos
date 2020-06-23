// write a function that takes an unsorted array and return it sorted

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr, '=>', arr[i], '&', arr[j])
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
        console.log('###########')
    }
    return arr;
}

console.log(selectionSort([9, 1, 3, 5, 6, 2, 4]))