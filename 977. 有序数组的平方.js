/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    /* let nums_new = new Array(nums.length).fill(0);
    for(i = 0; i <= nums.length - 1; i++) {
        nums_new[i] = nums[i] * nums[i];
    }
    return nums_new.sort((a, b) => a - b); */

    // 双指针
    let nums_new = [];
    for(i = 0, j = nums.length - 1; i <= j;) {
        if(nums[i] * nums[i] < nums[j] * nums[j]) {
            nums_new.unshift(nums[j] * nums[j]);
            j--;
        }else {
            nums_new.unshift(nums[i] * nums[i]);
            i++;
        }
    }
    return nums_new;
};