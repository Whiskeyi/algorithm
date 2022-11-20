const nums = [4, 4, 2, 4, 3];
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排列超时
// var unequalTriplets = function (nums) {
//   let len = nums.length; // 5
//   let rz = 0;
//   if (len <= 2) return 0;
//   let res = [];
//   let path = [];
//   const backTracking = (nums, startIndex, length) => {
//     if (path.length === 3 && !res.includes(path)) {
//       res.push([...path]);
//       return;
//     }
//     for (let k = startIndex; k < len; k++) {
//       path.push(k);
//       backTracking(nums, k + 1, length);
//       path.pop();
//     }
//   }
//   backTracking(nums, 0, 0);
//   res.forEach(item => {
//     if ((nums[item[0]] !== nums[item[1]])
//       && (nums[item[0]] !== nums[item[2]])
//       && nums[item[1]] !== nums[item[2]]) {
//       rz++
//     }
//   })
//   return rz
// };

var unequalTriplets = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let rz = 0, start = 0
  for (let i = 0; i <= len - 2; i++) {
    if (nums[i] !== nums[i + 1]) {
      rz += start * (i - start + 1) * (len - i - 1)
      start = i + 1
    }
  }
  return rz;
};

console.log(unequalTriplets(nums))