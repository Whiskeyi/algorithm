/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const amount = 5, coins = [1, 2, 5];
const change = (amount, coins) => {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
}
console.log(change(amount, coins));