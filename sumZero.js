// Given an integer n, return any array containing n unique integers such that they add up to 0.

var sumZero = function (n) {
    if (n <= 1) {
      return [0]
    } else {
      let arr = []
      let sum = 0
      for (let i = 0; i < n - 1; i++){
        arr.push(i+1)
        sum += i+1
      }
      arr.push(-Math.abs(sum))
      return arr
    }
  };
  
  
  
  console.log(sumZero(98))