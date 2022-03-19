// 深度优先遍历 + 剪枝
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
     // 深度优先遍历
    const dfs = (i, j, k) => {
        // 如果越界(行或列) 或 匹配到的字符与 word 当前遍历到的下标不同，直接返回（剪枝）
        if(i >= m || i < 0 || j >= n || j < 0 || board[i][j] !== word[k])
            return false;
        // 如果长度一样了，说明找到该路径了
        if(k === word.length - 1)
            return true;
        // 置空表明已经遍历过该字符了
        board[i][j] = '';
        // 在置空表明已经遍历过该字符了的前提下，继续递归上下右左看是否有满足等于单词的路径，只要有一个路径满足就行，所以 || 连接
        let res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        // 上面递归完后，要将字符变回来，复原现场，毕竟两层 for 循环每次都要用到 board 数组
        board[i][j] = word[k];
        return res;
    }
    let m = board.length; n = board[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(dfs(i, j, 0))
                return true;
        }
    }
    return false;
};