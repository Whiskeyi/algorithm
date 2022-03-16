var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

// const nums = [-1,-2];
// let dp = new Array(nums.length);
//     let maxDp = -Infinity;
//     dp[0] = nums[0];
//     if(nums.length === 1) console.log(nums[0]);
//     for(let i = 1; i < nums.length; i++) {
//         if(dp[i - 1] > 0) dp[i] = dp[i - 1] + nums[i];
//         else dp[i] = nums[i];
//     }
//     for(let j = 0; j < dp.length; j++) {
//         maxDp = Math.max(dp[j], maxDp);
//     }
//     console.log(maxDp);