/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let max = -Infinity;
    for (j = 1; j < i; j++) {
      max = Math.max(Math.max(dp[i - j] * j, (i - j) * j), max);
    }
    dp[i] = max;
  }
  return dp[n]
};