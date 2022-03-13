/**
 * @param {number[][]} grid
 * @return {number}
 */
// 深度优先遍历
 var maxAreaOfIsland = function(grid) {
    const dfs = (grid, m, n) => {
        if(m < 0 || n < 0 || m >= grid.length || n >= grid[0].length || grid[m][n] == 0) return 0;
        grid[m][n] = 0;
        let sum = 1;
        sum += dfs(grid, m - 1, n) + dfs(grid, m + 1, n) + dfs(grid, m, n + 1) + dfs(grid, m, n - 1);
        return sum;
    }
    let res = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            res = Math.max(res, dfs(grid, i, j));
        }
    }
    return res;
};

// 广度优先遍历 + 栈
var maxAreaOfIsland = function(grid) {
    let maxIsland = 0;
    let row = grid.length, col = grid[0].length;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            //0板块直接跳过
            if(grid[i][j] === 0) continue;
            //建立bfs栈始点
            let bfs = [[i, j]];
            let cntIsland = 0;
            //bfs栈不断弹出，直至全部遍历完成
            while(bfs.length) {
                let [x, y] = bfs.shift();
                //边界条件
                if(x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) continue;
                cntIsland++;
                //归 0
                grid[x][y] = 0;
                //向上下左右bfs遍历，向栈中加入符合条件的元素（岛屿）
                bfs.push([x - 1, y]);
                bfs.push([x + 1, y]);
                bfs.push([x, y - 1]);
                bfs.push([x, y + 1]);
            }
            maxIsland = Math.max(maxIsland, cntIsland);
        }
    }
    return maxIsland;
}