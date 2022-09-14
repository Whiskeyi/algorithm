let str = 'aaabbb';

// const map = new Map();

// for (st of str) {
//   map.set(st, map.get(st) + 1 || 1);
// }

const getResult = (str) => {
  let strLen = str.length;
  let dp = new Array(strLen).fill(0).map(
    () => new Array(strLen).fill(Infinity)
  );
  if (!strLen) return 0;
  // 赋初值
  for (let i = 0; i < strLen; i++) {
    dp[i][i] = 1;
  }
  for (let i = strLen - 2; i >= 0; i--) {
    for (let j = i + 1; j < strLen; j++) {
      dp[i][j] = dp[i + 1][j] + 1;
      for (let m = i + 1; m < j; m++) {
        if (str[m] === str[i]) dp[i][j] = Math.min(dp[i][j], dp[m + 1][j] + dp[i + 1][m]);
      }
      if (str[i] === str[j]) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j])
      }
    }
  }
  return dp[0][strLen - 1];
}

console.log(getResult(str));