// Given an array nums of n integers, are there elements a, b, c in nums 
// such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

var threeSum = function(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        console.log('this is i', i)
        for (let j = (i+1); j < nums.length; j++) {
            console.log('this is j', j)
            for (let x = (j+1); x < nums.length; x++) {
                console.log('this is x', x)
                if(nums[i] + nums[j] + nums[x] === 0 && i != j && i != x && x!= j){
                    newArr.push([nums[i], nums[j], nums[x]])
                }
                
            }
            
        }
        
    }
    return newArr
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]))