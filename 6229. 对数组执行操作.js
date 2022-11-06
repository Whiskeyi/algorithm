const nums = [1, 2, 2, 1, 1, 0]
// const nums = [0, 1]

var applyOperations = function (nums) {
  let rz = []
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] += nums[i]
      nums[i + 1] = 0
      continue
    }
  }
  nums.forEach(item => {
    if (item !== 0) {
      rz.push(item)
    }
  })
  let rzLen = rz.length
  for (let k = 0; k < nums.length - rzLen; k++) {
    rz.push(0)
  }
  return rz
};

console.log(applyOperations(nums))