const nums = [1, 3, 5, 2, 7, 5], minK = 1, maxK = 5;
var countSubarrays = function (nums, minK, maxK) {
  let len = nums.length;
  let childArr = [];
  let sum = 0;
  for (let k = 1; k <= len; k++) {
    let arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(nums[i]);
      if (arr.length === k) {
        childArr.push(arr);
        arr = [];
        i = i - k + 1;
      }
    }
  }
  childArr.forEach(item => {
    if (Math.max.apply(Math, item) === maxK && Math.min.apply(Math, item) === minK) {
      sum++;
    }
  })
  return sum;
}
console.log(countSubarrays(nums, minK, maxK))