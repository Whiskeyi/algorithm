/* 给一个01矩阵，1代表是陆地，0代表海洋， 如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。
岛屿: 相邻陆地可以组成一个岛屿（相邻:上下左右） 判断岛屿个数。
例如：
输入
[
[1,1,0,0,0],
[0,1,0,1,1],
[0,0,0,1,1],
[0,0,0,0,0],
[0,0,1,1,1]
]
对应的输出为3
(注：存储的01数据其实是字符'0','1') */
/**
 * 判断岛屿数量
 * @param grid string字符串型二维数组
 * @return int整型
 */
 function solve( grid ) {
    // write code here
    const dfs = function(grid, x, y) {
        if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === '0') return;
        grid[x][y] = '0';
        dfs(grid, x - 1, y);
        dfs(grid, x + 1, y);
        dfs(grid, x, y + 1);
        dfs(grid, x, y - 1);
    }
    let rz = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                rz++;
                dfs(grid, i, j);
            }
        }
    }
    return rz;
}
module.exports = {
    solve : solve
};