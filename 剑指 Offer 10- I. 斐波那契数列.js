/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
 var fib = function(n) {
    const MOD = 1000000007;
    if(n < 2) return n;
    let [a, b, c] = [0, 0, 1];
    for(let i = 2; i <= n; i++) {
        a = b;
        b = c;
        c = (a + b) % MOD;
    }
    return c;
};