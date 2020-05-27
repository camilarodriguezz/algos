// Given two strings, write a function to determine if the swcond string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.
// The strings are single words and lower case.

// OPTION 1 | Time complexity === O(n)

function isAnagram1(str1, str2) {
    // check that both strings have the same lenght
    if (str1.length !== str2.length) {
        return false;
    }
    // create a dictionary for every string
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0; i < str1.length; i++) {
        frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
        frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
    }
    // compare the dictionaries and the frecuency
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// OPTION 2 | Time complexity === O(n)

function isAnagram2(str1, str2) {
    // check that both strings have the same lenght
    if (str1.length !== str2.length) {
        return false;
    }
    // create an object for the first string
    let frequencyCounter = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if the letter exist in the object add one otherwise set to 1
        frequencyCounter[letter] ? frequencyCounter[letter] += 1 : frequencyCounter[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter in the object or letter is zero then it's not an anagram
        if (!frequencyCounter[letter]) {
            return false;
        } else {
            frequencyCounter[letter] -= 1;
        }
    }
    return true;
}

console.log(isAnagram1('qwertyjjj', 'qeywrtjj'))
console.log(isAnagram2('qwertyjjj', 'qeywrtjj'))