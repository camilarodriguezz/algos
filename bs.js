const binarySearch = (array, value) => {
    // left, right, middle
    // loop and check if middle is equal to what we want, if so return that index
    // if value too small move left pointer up
    // if value is too large move right value down
    // if value not there return - 1
    let left = array[0]
    let right = array.length - 1
    let middle = Math.floor((left + right) / 2)

    while (array[middle] !== value && left <= right) {
        if (value < array[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2)
        if (array[middle] === value) {
            return middle
        } else {
            return -1
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200]), 20)