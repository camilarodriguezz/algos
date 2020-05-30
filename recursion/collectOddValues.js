// write a function that takes an array of integers,
// and return an array with all the odd values.

function collectOddValues1(arr) {

    let result = [];

    function helper(input) {
        if (input.length === 0) {
            return;
        }
        if (input[0] % 2 != 0) {
            result.push(input[0]);
        }
        helper(input.slice(1));
    }
    helper(arr);

    return result;
}

console.log(collectOddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9]))

function collectOddValues2(arr) {
    let result = [];

    if (arr.length === 0) {
        return result;
    }
    if (arr[0] % 2 != 0) {
        result.push(arr[0]);
    }

    result = result.concat(collectOddValues2(arr.slice(1)));
    return result;
}

console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]))