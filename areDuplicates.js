// wirte a function that accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 

// Time complexity O(n)

function areThereDuplicates() {
    let frequencyCounter = {};
    for (let val in arguments) {
        let item = arguments[val];
        if (frequencyCounter[item]) {
            return true;
        } else {
            frequencyCounter[item] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5))
