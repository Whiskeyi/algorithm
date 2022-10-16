/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let key = nums.pop();
    if (key > 0 && nums.indexOf(-key) !== -1) {
      return key
    }
  }
  return -1;
};