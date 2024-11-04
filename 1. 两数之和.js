/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let matchNum = target - nums[i];
        if (map.has(matchNum)) {
            return [map.get(matchNum), i]
        } else {
            map.set(nums[i], i)
        }
    }
};