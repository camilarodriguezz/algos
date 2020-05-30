// write a function that accepts a number,
// and adds up all the numbersfrom zero to the number.

function recursiveRange(n) {
    if (n === 0) {
        return 0;
    }
    return n + recursiveRange(n-1);
}

console.log(recursiveRange(6))