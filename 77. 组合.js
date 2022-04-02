// 回溯
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let rz = [];
    let path = [];
    const backTracking = function(n, k, startIndex) { // startIndex用来记录下一层递归，搜索的起始位置
        if (path.length === k) {
            rz.push([...path]);
            return;
        }
        for (let i = startIndex; i <= n; i++) { // 控制树的横向遍历
            path.push(i); // 处理节点
            backTracking(n, k, i + 1); // 递归：控制树的纵向遍历，下一层搜索从i+1开始
            path.pop(); // 回溯，撤销处理的节点
        }
    }
    backTracking(n, k, 1);
    return rz;
};

// 剪枝优化
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let rz = [];
    let path = [];
    const backTracking = function(n, k, startIndex) {
        if (path.length === k) {
            rz.push([...path]);
            return;
        }
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) { // 剪枝
            path.push(i);
            backTracking(n, k, i + 1);
            path.pop();
        }
    }
    backTracking(n, k, 1);
    return rz;
};