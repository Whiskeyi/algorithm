/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 方法1：左右乘积列表
    let n = nums.length;
    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);
    let res = new Array(n).fill(1);

    for (let i = 0; i < n - 1; i++) {
        left[i + 1] = nums[i] * left[i];//存储nums[i]左边数字的乘积,从第二个值开始，因为第一个值已经初始化为1了，right也一样
    }
    for (let j = n - 1; j > 0; j--) {
        right[j - 1] = right[j] * nums[j];//存储nums[i]右边数字的乘积，
    }
    for (let i in res) {
        res[i] = left[i] * right[i];//计算除自身以外数组的乘积：res[i] = left[i] * right[i]
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 方法2：空间复杂度 O(1)的方法
    let n = nums.length;
    let ans = new Array(n).fill(1);
    let prefix = 1;
    let suffix = 1;
    for (let i in ans) {
        ans[i] *= prefix;
        ans[n - i - 1] *= suffix;
        prefix *= nums[i];
        suffix *= nums[n - i - 1];
    }
    return ans;
};