/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 去重存储原数组
  let numSet = new Set(nums);
  let maxLen = 0;
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let curNum = num;
      let curLen = 1;

      // 只有是连续序列第一个数
      while (numSet.has(curNum + 1)) {
        curNum++;
        curLen++;
      }

      maxLen = Math.max(maxLen, curLen);
    }
  }

  return maxLen;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9

