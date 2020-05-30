// write a function that accepts a string,
// and returns true id the string is a Palindrome.
// (reads the same forward and backward).
// otherwise returns false.

function isPalindrome(str) {

    let left = 0;
    let right = str.length - 1;
    let answer = true;

    function helper(l, r) {
        if (l <= r) {
            if (str[l] !== str[r]) {
                answer = false;
                return answer;
            }
            helper(l + 1, r - 1);
        }
        return answer;
    }

    return helper(left, right);
}

console.log(isPalindrome('aba'))