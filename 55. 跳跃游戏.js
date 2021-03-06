/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(k < i) return false;
        k = Math.max(k, i + nums[i]);
    }
    return true;
};