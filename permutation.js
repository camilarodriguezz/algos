function perm(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    var temp = [];
    for (let i = 0; i < string2.length; i++) {
        temp.push(string2[i])
    }
    for (let j = 0; j < string1.length; j++) {
        var counter = 0;
        for (let z = 0; z < temp.length; z++) {
            if (string1[j] == temp[z]) {
                counter += 1
                temp.splice(z, 1)
                break;
            }
        }
        if (counter == 0) {
            return false
        }
    }
    return true
}

// console.log(perm("apple", "pllae"))

// define array outside of the function because it will be a recursive function
var permutationsArr = []
var usedChars = [];

function permute(arr) {
  var i, ch;
  for (i = 0; i < arr.length; i++) {
    ch = arr.splice(i, 1)[0];
    // console.log('arr.splice(i, 1)', arr.splice(i, 1)[0])
    usedChars.push(ch);
    if (arr.length == 0) {
      permutationsArr.push(usedChars.slice());
    }
    permute(arr);
    arr.splice(i, 0, ch);
    usedChars.pop();
  }
  return permutationsArr
};

console.log('result',permute([0,1,2]))