// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";
const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB";
// const board = [["a", "b"], ["c", "d"]], word = "abcd";
var exist = function (board, word) {
  let flag = false;
  let index = 0;
  const dfs = (board, i, j, word) => {
    if (i >= 0 && j >= 0 && i < board.length && j < board[0].length) {
      if (word[index] !== board[i][j]) {
        return
      } else {
        console.log(board[i][j])
        board[i][j] = -1;
        index++
      }
      dfs(board, i, j - 1, word);
      dfs(board, i, j + 1, word);
      dfs(board, i - 1, j, word);
      dfs(board, i + 1, j, word);
      if (index === word.length) {
        flag = true;
        return
      }
    } else return;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      index = 0;
      dfs(board, i, j, word);
    }
  }
  return flag;
};

console.log(exist(board, word))