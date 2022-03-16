function getSolveCount(str) {
    const MAX_VALUE = 2147483647 + 1;
    let dp = new Array(str.length + 1);
    [dp[0], dp[1]] = [1, 1];
    for(let i = 2; i <= str.length; i++) {
        dp[i] = dp[i - 1];
        /*             js有计算精度的限制，一旦一个整型大于Number.MAX_SAFE_INTEGER，就会丢失精度
            应该在运算的每一步都对Math.pow(2, 31)即MAX_VALUE取模，而不是只在最后一下 */
        dp[i] %= MAX_VALUE;
        if(i - 2 <= str.length && str[i - 2] === '1') {
            dp[i] += dp[i - 2];
            dp[i] %= MAX_VALUE;
        }
        if(i -3 <= str.length && str[i - 3] === '1') {
            dp[i] += dp[i - 3];
            dp[i] %= MAX_VALUE;
        }
    }
    return dp[str.length];
}
const str = '1101'
const res = getSolveCount(str);
console.log(res);