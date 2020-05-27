// write a function that accepts a sorted array,
// and counts the unique values in the array.
// there can be negative numbers in the array, 
// but it will always be sorted.

function countUniqueValues(array) {
    // set a counter
    let counter = 0;
    // set the pointers
    let p1 = 0;
    let p2 = 1;
    // loop  and count
    while (p2 <= array.length) {
        if (array[p1] === array[p2]) {
            p2++;
        } else if (array[p1] !== array[p2]) {
            counter++;
            p1 = p2;
            p2++;
        }
    }
    return counter;
}

console.log(countUniqueValues([-7,-7,-6,-6,-5,-5,-4,-3,-3,-2,-2,-2,-2,-1,0,1,1,2,3,4,5,5,6,7]))