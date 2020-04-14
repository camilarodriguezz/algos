// function fintIt(arr, num) {
//     if (arr.length == 0) {
//         return false;
//     }
//     let l = 0;
//     let r = (arr.length) - 1;
//     let m = Math.floor(r / 2);
//     console.log('this is initial left value', arr[l]);
//     console.log('this is initial right value', arr[r]);
//     console.log('this is initial middle value', arr[m]);
//     if (arr[m] > num) {
//         while (arr[m] > num) {
//             console.log('*This is when', arr[m], 'is greater than', num);
//             console.log('*this is new left value', arr[l]);
//             console.log('*this is new right value', arr[r]);
//             console.log('*this is new middle value', arr[m]);
//             if (arr[l] == num || arr[r] == num || arr[m] == num) {
//                 return true;
//             }
//             l++;
//             r = m;
//             m = Math.floor(r / 2);
//         }
//     }
//     if (arr[m] < num) {
//         while (arr[m] < num) {
//             console.log('#This is when', arr[m], 'is less than', num);
//             console.log('#this is new left value', arr[l]);
//             console.log('#this is new right value', arr[r]);
//             console.log('#this is new middle value', arr[m]);
//             if (arr[l] == num || arr[r] == num || arr[m] == num) {
//                 return true;
//             }
//             r--;
//             console.log('#this is index r', r);
//             l = m;
//             console.log('#this is index l', l);
//             m = Math.floor(r - (l / 2));
//             console.log('#this is index m', m);
//         }
//     }

//     for (let i = l; i <= r; i++) {
//         console.log('this is index i', i);
//         console.log('this is index r', r);
//         console.log(arr[i])
//         if (arr[i] == num) {
//             console.log('this is true', arr[i])
//             return true;
//         }
//     }
//     return false;
// }

// #################################

// function fintIt(arr, num) {
//     if (arr.length == 0) {
//         return false;
//     }
//     let l = 0;
//     let r = (arr.length) - 1;
//     let m = Math.floor(r / 2);
//     if (arr[m] > num) {
//         while (arr[m] > num) {
//             if (arr[l] == num || arr[r] == num || arr[m] == num) {
//                 return true;
//             }
//             l++;
//             r = m;
//             m = Math.floor(r / 2);
//         }
//     }
//     if (arr[m] < num) {
//         while (arr[m] < num) {
//             if (arr[l] == num || arr[r] == num || arr[m] == num) {
//                 return true;
//             }
//             r--;
//             l = m;
//             m = Math.floor(r - (l / 2));
//         }
//     }
//     for (let i = l; i <= r; i++) {
//         if (arr[i] == num) {
//             console.log('true', arr[i], 'find in arr at index:', i)
//             return true;
//         }
//     }
//     console.log('false', num, 'is not in arr')
//     return false;
// }

// #################################

function fintIt(arr, num) {
    if (arr.length == 0) {
        return false;
    }
    let l = 0;
    let r = (arr.length) - 1;
    let m = Math.floor(r / 2);
    if (num < arr[l] || num > arr[r]) {
        return false;
    }
    while (arr[m] > num) {
        if (arr[l] == num || arr[r] == num || arr[m] == num) {
            return true;
        }
        l++;
        r = m;
        m = Math.floor(r / 2);
    }
    while (arr[m] < num) {
        if (arr[l] == num || arr[r] == num || arr[m] == num) {
            return true;
        }
        r--;
        l = m;
        m = Math.floor(r - (l / 2));
    }
    for (let i = l; i <= r; i++) {
        if (arr[i] == num) {
            return true;
        }
    }
    return false;
}

var arr = [4, 5, 6, 7, 8, 9, 12, 14, 16, 18, 23, 25, 27, 89, 90, 99, 123, 12345]
var num = 19999999

console.log(fintIt(arr, num))

// #################################

