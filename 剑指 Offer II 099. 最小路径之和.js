/**
 * @param {number[][]} grid
 * @return {number}
 */

const grid = [[1, 2, 3], [4, 5, 6]];

var minPathSum = function (grid) {
  let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
  let row = 0;
  let column = 0;
  for (let i = 0; i < grid.length; i++) {
    row += grid[i][0]
    dp[i][0] = row;
  }
  for (let j = 0; j < grid[0].length; j++) {
    column += grid[0][j]
    dp[0][j] = column;
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
    }
  }
  return dp[grid.length - 1][grid[0].length - 1]
};

console.log(minPathSum(grid))