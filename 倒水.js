let line1 = parseInt(readline());
function water() {
    let line2 = readline().split(' ');
    let m = parseInt(line2[0]);
    let n = parseInt(line2[1]);
    let dp = new Array(m + 1).fill(1).map(() => new Array(n + 1).fill(1));
    const dpFun = function(m, n) {
        for(let i = 2; i <= m; i++) {
            for(let j = 2; j <= n; j++) {
               if(i >= j) dp[i][j] = dp[i - j][j] + dp[i][j - 1];
                else dp[i][j] = dp[i][j - 1];
            }
        }
        return dp[m][n];
    }
    return dpFun(m, n);
}
for(let a = 0; a < line1; a++) {
    print(water());
}