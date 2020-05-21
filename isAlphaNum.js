// Write a funtion that takes an input and return a boolen if the input is number or a letter

function isAlphaNumeric(char) {
    let code = char.charCodeAt();
    if (
        !(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)
    ) {
        return false
    } else {
        return true
    }
}

console.log(isAlphaNumeric('7'))