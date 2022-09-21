/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 单指针做法
  // let head = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     let temp;
  //     if (nums[i] === 0) {
  //         temp = nums[head];
  //         nums[head] = nums[i];
  //         nums[i] = temp;
  //         head++;
  //     }
  // }
  // for (let i = 0; i < nums.length; i++) {
  //     let temp;
  //     if (nums[i] === 1) {
  //         temp = nums[head];
  //         nums[head] = nums[i];
  //         nums[i] = temp;
  //         head++;
  //     }
  // }
  // 双指针做法
  let startHead = 0;
  let endHead = nums.length - 1;
  for (let i = 0; i <= endHead; i++) {
    let temp;
    while (nums[i] === 2 && i < endHead) {
      temp = nums[i];
      nums[i] = nums[endHead];
      nums[endHead] = temp;
      endHead--;
    }
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[startHead];
      nums[startHead] = temp;
      startHead++;
    }
  }
};