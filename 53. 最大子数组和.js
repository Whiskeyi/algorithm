/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let ans = nums[0];
//     let sum = 0;
//     for (let num of nums) {
//         if (sum + num > sum) {
//             sum += num;
//         } else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum)
//     }
//     return ans
// };


// var maxSubArray = function (nums) {
//   let pre = 0, maxAns = nums[0];
//   nums.forEach((x) => {
//     pre = Math.max(pre + x, x);
//     maxAns = Math.max(maxAns, pre);
//   });
//   return maxAns;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = []
  dp[0] = nums[0]
  let rz = dp[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    if (dp[i] > rz) rz = dp[i]
  }
  return rz
};