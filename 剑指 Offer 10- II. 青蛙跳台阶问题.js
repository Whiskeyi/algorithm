/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    if(!n || n === 1) return 1;
    let arr = [1, 1];
    for(let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
    }
    return arr[n];
};

//空间复杂度优化
/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    if(!n || n === 1) return 1;
    let [a, b] = [1, 1];
    let c;
    for(let i = 0; i < n; i++) {
        c = (a + b) % 1000000007;
        a = b;
        b = c;
    }
    return a;
};