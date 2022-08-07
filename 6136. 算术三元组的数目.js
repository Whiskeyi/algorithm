/**
 * 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：
 * i < j < k ，
 * nums[j] - nums[i] == diff 且
 * nums[k] - nums[j] == diff
 * 返回不同 算术三元组 的数目。
 */

/*  示例 1：

 输入：nums = [0,1,4,6,7,10], diff = 3
 输出：2
 解释：
 (1, 2, 4) 是算术三元组：7 - 4 == 3 且 4 - 1 == 3 。
 (2, 4, 5) 是算术三元组：10 - 7 == 3 且 7 - 4 == 3 。 */

/*  示例 2：

 输入：nums = [4,5,6,7,8,9], diff = 2
 输出：2
 解释：
 (0, 2, 4) 是算术三元组：8 - 6 == 2 且 6 - 4 == 2 。
 (1, 3, 5) 是算术三元组：9 - 7 == 2 且 7 - 5 == 2 。 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

const nums = [0,1,4,6,7,10], diff = 3;

var arithmeticTriplets = function(nums, diff) {
    let sum = 0;
    for(let i = 0; i < nums.length - 2; i++) {
        let countJ = 0;
        let k = i;
        // k + 1 所以 j <= length
        for(let j = k + 1; j <= nums.length; j++) {
            if(countJ === 2) {
                sum++;
                break;
            } else {
                if(nums[j] - nums[k] === diff) {
                    k = j;
                    countJ++;
                } else if(nums[j] - nums[k] > diff) {
                    break;
                } else continue;
            }
        }
    }
    return sum;
};

console.log(arithmeticTriplets(nums, diff));