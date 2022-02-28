/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let last = nums[nums.length - 1];
    for(i = 0; i <= last; i++) {
        if(!nums.includes(i)) return i;
    }
    if(nums[0] === 0) return last + 1;
};