// function missingNum(arr) {
//     let sum_arr = arr[0];
//     for (let i = 1; i<arr.length; i++) {
//         sum_arr += arr[i];
//     }
//     let missNum = (sum_arr+arr.length) - sum_arr;
//     console.log('this is misnum',missNum);
//     return missNum;
// }

// let arr = [0,2,1]

// console.log(missingNum(arr))


function missingNum(arr) {
    let sum_arr = arr[0];
    for (let i = 1; i<arr.length; i++) {
        sum_arr += arr[i];
    }
    return (sum_arr+arr.length) - sum_arr;
}

let arr = [0,2,1]

console.log(missingNum(arr))
