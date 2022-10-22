const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]

var numIslands = function (grid) {
  let rz = 0;
  let flag = false;
  const dfs = (grid, i, j) => {
    if (i >= 0 && j >= 0 && i < grid.length && j < grid[0].length) {
      if (grid[i][j] !== '1') return
      grid[i][j] = '0';
      dfs(grid, i, j + 1);
      dfs(grid, i, j - 1);
      dfs(grid, i + 1, j);
      dfs(grid, i - 1, j);
    } else return
    flag = true;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      dfs(grid, i, j);
      if (flag) {
        rz++;
        flag = false
      }
    }
  }
  return rz;
};

console.log(numIslands(grid))