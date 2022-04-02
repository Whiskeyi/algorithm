/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 // 深度优先遍历 超时
 var uniquePaths = function(m, n) {
    const dfs = function(i, j, m, n) {
        if(i > m || j > n) return 0;
        if(i === m || j === n) return 1;
        return dfs(i, j + 1, m, n) + dfs(i + 1, j, m, n);
    }
    return dfs(1, 1, m, n);
};

// 动态规划dp
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // 初始化dp[][]
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    // 初始化dp[i][0], dp[0][j];
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp [i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};