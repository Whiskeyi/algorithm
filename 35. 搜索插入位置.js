/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while(left <= right) {
        if(target < nums[mid]) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        }else if(target > nums[mid]) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }else return mid;
    }
    return left;
};