// write a function that takes 2 positive integers, 
// find out if the 2 number have the same frequency of digits.

// Time complexity === O(n)

function sameFrequency(n1, n2) {
    n1 = n1.toString()
    n2 = n2.toString()
    // check that both numbers have the same length
    if (n1.length !== n2.length) {
        return false;
    }
    // create an object for the first number
    let frequencyCounter = {};
    for (let i = 0; i < n1.length; i++) {
        let num = n1[i];
        // if the number exist in the object add one otherwise set to 1
        frequencyCounter[num] ? frequencyCounter[num] += 1 : frequencyCounter[num] = 1;
    }
    for (let i = 0; i < n2.length; i++) {
        let num = n2[i];
        // can't find num in the object or num is zero then it's not the same frequency
        if (!frequencyCounter[num]) {
            return false;
        } else {
            frequencyCounter[num] -= 1;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281))