// is Pangram
// Write a standalone function that checks whether a given string contains all letters in the English alphabet, upper or lowercase.
// Given: "How quickly daft jumping zebra vex"
// => true
// Given: "John quickly extemporized five tow bags"
// => true
// Given: "apple sauce"
// => return false
// strings must be minimum 26 characters long or else there's no reason to finish checking.

function isPangram(str) {
    if (str.length < 26) {
      console.log('first stop false')
      return false
    }
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < alpha.length; i++) {
      let counter = 0;
      for (let j = 0; j < str.length; j++) {
        console.log(alpha[i], str[j])
        if (alpha[i] == str[j] || alpha[i].toUpperCase() == str[j]) {
          counter++;
          break;
          console.log('nested loop', counter)
        }
      }
      console.log('1loop', counter)
      if (counter === 0) {
        console.log('second stop false')
        return false
      }
    }
    console.log('last stop true')
    return true
  }
  
  console.log(isPangram("apple sauce"))