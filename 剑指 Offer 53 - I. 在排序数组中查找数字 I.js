/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.includes(target)) {
        let map = new Map();
        for(num of nums) {
            map.set(num, map.get(num) + 1 || 1);
        }
        return [...map].filter(item => item[0] === target)[0][1];
    } else return 0;
};