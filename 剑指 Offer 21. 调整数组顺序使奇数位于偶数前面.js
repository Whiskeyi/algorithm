/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // 奇前偶后
 var exchange = function(nums) {
    let rz = [];
    for(num of nums) {
        // 为奇数
        if(num % 2 !== 0) rz.unshift(num);
        else rz.push(num);
    }
    return rz;
};

// 双指针
/* 1、左指针取余为 0，同时右指针取余不为 0，此时将左右指针元素互换。
2、左指针取余为 0，同时右指针取余为 0，此时将右指针向左移一位。
3、左指针取余不为 0，同时右指针取余不为 0，此时将左指针向右移一位。
4、左指针取余不为 0，同时右指针取余为 0，此时将左指针向右移一位，同时将右指针向左移一位。
 */
var exchange = function(nums) {
    let l = 0, r = nums.length - 1, temp = 0;
    while (l < r) {
        if (nums[l] % 2 === 0 && nums[r] % 2 !== 0) {
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        } else if (nums[l] % 2 === 0 && nums[r] % 2 === 0) {
            r--;
        } else if (nums[l] % 2 !== 0 && nums[r] % 2 !== 0) {
            l++;
        } else {
            r--;
            l++;
        }
    }
    return nums;
};