/**
 * @param {number[]} nums
 * @return {number}
 */

// map
 var removeDuplicates = function(nums) {
    const map = new Map();
    for(num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }
    nums = [...map][0];
    return [...map][0].length;
};

// 快慢指针
 var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    let [slow, fast] = [1, 1];
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};