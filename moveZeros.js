// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
  let index = 0 // index of zeros will start here
    
  // if not a zero set that index to the first available index
  for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[index] = nums[i]
            index++
        }
    }
    // add zeros at the end
    for(let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};


console.log(moveZeroes([0,1,0, 0, 4,12]));
