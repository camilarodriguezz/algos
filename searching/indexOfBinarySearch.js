// write a function that accepts a sorted array and a value
// loop through the array and check if the current array element is equal to the value
// if it is, return the index at which the element is found
// if the value is never found, return -1.

function indexOf(arr, val) {
    let l = 0;
    let r = arr.length - 1;
    let p = Math.floor(r / 2);

    while (val !== arr[p] && l < r) {

        if (val < arr[p]) r = p - 1;
        else l = p + 1;
        p = Math.floor((l + r) / 2);
        
    }

    return arr[p] === val ? p : -1;
}

console.log(indexOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0))

