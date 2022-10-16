/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n).fill(0);
  for (let i = 2; i <= n; i++) {
    let maxVal = 0;
    for (let j = 1; j < i; j++) {
      maxVal = Math.max(maxVal, Math.max(dp[i - j] * j, (i - j) * j));
    }
    dp[i] = maxVal;
  }
  return dp[n];
};