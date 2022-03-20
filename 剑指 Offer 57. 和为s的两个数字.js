// 双指针
var twoSum = function (nums, target) {
    if (nums == null) return [];
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let sum = nums[left] + nums[right];
      if (sum == target) return [nums[left], nums[right]];
      else if (sum < target) left++;
      else right--;
    }
    return [];
};
// 二分查找，超出时间限制
/*  var twoSum = function(nums, target) {
    function binarySearch(arr, tar) {
        let left = 0;
        let right = arr.length - 1;
        let mid = Math.floor((left + right) / 2);
        while(left <= right) {
            if(arr[mid] > tar) {
                right = mid - 1;
                mid = Math.floor((left + right) / 2);
            }else if(arr[mid] < tar) {
                left = mid + 1;
                mid = Math.floor((left + right) / 2);
            }else if(arr[mid] === tar) return mid;
        }
        return false;
    }
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        let searchNum = target - nums[0];
        let saveNum = nums[0];
        nums.shift();
        let rz = binarySearch(nums, searchNum);
        if(!(rz === false)) return [saveNum, nums[rz]];
    }
    return [];
};
const nums = [10,18,25,33,36,50,50,52,57,74];
const target = 126;
console.log(twoSum(nums, target)); */