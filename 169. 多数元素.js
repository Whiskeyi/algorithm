/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length;
  let map = new Map();
  for (num of nums) {
    map.set(num, map.get(num) + 1 || 1)
    if (map.get(num) > len / 2) return num
  }
};