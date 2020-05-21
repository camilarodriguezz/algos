// Write a function that takes and string and return a count of each alpha numeric character in the string

// ask for edge cases
function charCount(str) {
    // make sure the input is a valid input
    // create and object to store the result
    let result = {};
    // convert the string into lower case
    str = str.toLowerCase();
    // loop the string to start counting for each character
    for (let char of str) {
        // verify the character is alphanumeric
        if (/[a-z0-9]/.test(char)) {
            // verify if the character already exists in the dictionary
            if (result[char] > 0) {
                // if it exist add 1
                result[char]++;
            } else {
                // if it doesnt exist add it and start with 1
                result[char] = 1;
            }
        }
    }
    // return the object with the result
    return result;
}

console.log(charCount('HeLlO It iS mE 3453 ?!!'))