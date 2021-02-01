const moreThanOce = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter > 1 && newArr.includes(arr[i]) === false) {
            newArr.push(arr[i])
        }
    }
    console.log(arr)
    return newArr;
}

console.log(moreThanOce([3, 2, 6, 7, 1, 8, 5, 3, 9, 0, 2, 4, 6, 1, 2, 7, 5, 0, 3]))