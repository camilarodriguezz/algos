// Write a funtion which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same.

// OPTION 1 | Time complexity === O(n^2)

function same1(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === (arr1[i] * arr1[i])) {
                arr2.splice(j, 1);
                break;
            }
        }
    }
    if (arr2.length === 0) {
        return true;
    } else {
        return false;
    }
}

// OPTION 2 | Time complexity === O(n^2)

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index === -1) {
            return false;
        }
        arr2.splice(index, 1);
    }
    return true;
}

// OPTION 3 | Time complexity === O(n)

function same3(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
        frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same1([1, 2, 3, 2], [9, 4, 1, 4]))
console.log(same2([1, 2, 3, 2], [9, 4, 1, 4]))
console.log(same3([1, 2, 3, 2], [9, 4, 1, 4]))