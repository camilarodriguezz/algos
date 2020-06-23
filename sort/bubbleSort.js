// write a function that takes an unsorted array and return it sorted

const bubbleSort = (arr) => {
    let lastSwaped;
    for (let i = arr.length - 1; i > 0; i--) {
        lastSwaped = true;
        for (let j = 0; j < i; j++) {
            console.log(arr, '=>', arr[j], '&', arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                lastSwaped = false;
            }
        }
        console.log('###########')
        if(lastSwaped) break;
    }
    return arr;
}

console.log(bubbleSort([9,1,3,5,6]))