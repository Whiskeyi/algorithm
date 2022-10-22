/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let rz = [[]];
  let path = [];
  let len = nums.length;
  const backTracking = (nums, startIndex, length) => {
    if (path.length === length) {
      rz.push([...path]);
      return;
    }
    for (let k = startIndex; k < len; k++) {
      path.push(nums[k]);
      backTracking(nums, k + 1, length);
      path.pop();
    }
  }
  for (let i = 1; i <= len; i++) {
    backTracking(nums, 0, i);
  }
  return rz;
};