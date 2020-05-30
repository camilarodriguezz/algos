function reverse(str) {

    let newStr = "";
    let temp = str.length - 1;

    function helper(string, n) {
        if (n === 0) {
            newStr += string[n];
            return
        }
        newStr += string[n];
        helper(string, n - 1)
    }

    helper(str, temp);

    return newStr;
}

console.log(reverse('hello'))