/* 给你一个非负整数数组 nums 。在一步操作中，你必须：
选出一个正整数 x ，x 需要小于或等于 nums 中 最小 的 非零 元素。
nums 中的每个正整数都减去 x。
返回使 nums 中所有元素都等于 0 需要的 最少 操作数。 */

/* 输入：nums = [1,5,0,3,5]
输出：3
解释：
第一步操作：选出 x = 1 ，之后 nums = [0,4,0,2,4] 。
第二步操作：选出 x = 2 ，之后 nums = [0,2,0,0,2] 。
第三步操作：选出 x = 2 ，之后 nums = [0,0,0,0,0] 。 */

/* 输入：nums = [0]
输出：0
解释：nums 中的每个元素都已经是 0 ，所以不需要执行任何操作。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 较常规做法，现将原属组排序。后遍历一遍，减去不为0的值（不用管减后的值为负，只需判断末尾最大值为0为终止条件）
let nums = [1, 5, 0, 3, 5];
var minimumOperations = function (nums) {
  let count = 0;
  nums = nums.sort((a, b) => a - b); // 0, 1, 3, 5, 5
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums = nums.map(item =>
        item -= nums[i]
      );
      count++;
    }
  }
  if (nums[nums.length - 1] === 0) return count;
};

console.log(minimumOperations(nums));