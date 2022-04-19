// 同字节笔试题
// 1. 超时做法
/* *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /* var subarraysDivByK = function(nums, k) {
    let rz = 0;
    for(let i = 0; i < nums.length; i++) {
        let needSum = [];
        for(let j = i; j < nums.length; j++) {
            needSum.push(nums[j]);
            if(needSum.reduce((s, k) => s += k) % k === 0) {
                rz++;
            }
        }
    }
    return rz;
}; */

// 2. 前缀和 + 哈希表 + 排列组合
let nums = [-4, -1, 0, -9];
let k = 9;
var subarraysDivByK = function(nums, k) {
    let preSum = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        preSum.push(sum);
    }
    const map = new Map();
    map.set(0, 1);
    for(let num of preSum) {
        map.set((num % k + k) % k, map.get((num % k + k) % k) + 1 || 1);
    }
    let rz = 0;
    [...map.values()].forEach((item) => rz += (item * (item - 1)) / 2)
    return rz;
};
console.log(subarraysDivByK(nums, k))