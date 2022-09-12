// 思路：使用位运算
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((total, curr) => { return total ^ curr })
};