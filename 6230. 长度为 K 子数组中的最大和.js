const nums = [1, 5, 4, 2, 9, 9, 9], k = 3;

var maximumSubarraySum = function (nums, k) {
  // const isDifferent = (nums) => {
  //   let len = nums.length
  //   if (len === [...new Set(nums)].length) {
  //     return true
  //   }
  //   return false
  // }
  // 滑动窗口 + 哈希表
  let prev = 0, last = prev + k - 1
  let maxSum = 0
  let currSum = 0
  let firstOp = true
  let currMap = new Map()
  for (let m = 0; m <= last; m++) {
    currSum += nums[m]
    currMap.set(nums[m], currMap.get(nums[m]) + 1 || 1)
  }
  for (let i = prev, j = last; i <= nums.length - k, j < nums.length; i++, j++) {
    if (!firstOp) {
      currSum -= nums[i - 1]
      currSum += nums[j]
      if (currMap.get(nums[i - 1]) > 1) {
        currMap.set(nums[i - 1], currMap.get(nums[i - 1]) - 1)
      } else {
        currMap.delete(nums[i - 1])
      }
      currMap.set(nums[j], currMap.get(nums[j]) + 1 || 1)
      // if (currMap.get(nums[j])) {
      //   currMap.set(nums[j], currMap.get(nums[j]) + 1)
      // }
    }
    firstOp = false;
    if ([...currMap.keys()].length === k) {
      maxSum = Math.max(maxSum, currSum)
    }
    // if (isDifferent(nums.slice(i, j + 1))) {
    //   maxSum = Math.max(maxSum, currSum)
    // }
  }
  return maxSum
};

console.log(maximumSubarraySum(nums, k))