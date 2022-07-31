/**
 *
 * @param nums int整型一维数组
 * @return int整型二维数组
 */
let nums = [-10, 0, 10, 20, -10, -40];

function threeSum(nums) {
  const res = [], len = nums.length;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let left = i + 1, right = len - 1, firstNum = nums[i];
    // 若排序后第一个数大于0直接return
    if (firstNum > 0) return res;
    // 去重
    if (firstNum === nums[i - 1]) continue;
    while (left < right) {
      let lNum = nums[left], rNum = nums[right], threeSum = firstNum + lNum + rNum;
      // 三数之和小于0，左指针向右移动
      if (threeSum < 0) left++;
      else if (threeSum > 0) right--;
      else {
        res.push([firstNum, lNum, rNum]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
}

console.log(threeSum(nums));