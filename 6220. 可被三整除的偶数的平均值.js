/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let rz = 0
  nums = nums.filter(item => item % 6 === 0)
  if (nums.length) {
    rz = nums.reduce((pre, cur) => pre + cur)
    rz = Math.floor(rz / nums.length)
    return rz
  }
  return 0
};