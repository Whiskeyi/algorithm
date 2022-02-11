// 顺时针
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let len = matrix.length;
    const rz = new Array(len).fill(0).map(() => new Array(len).fill(0));
      for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++){
          rz[i][j] = matrix[j][len - i - 1];
        }
      }
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            matrix[i][j] = rz[i][j];
        }
    }
  }
// 逆时针
// var matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// let len = matrix.length;
// const rz = new Array(len).fill(0).map(() => new Array(len).fill(0));
//   for(let i = 0; i < len; i++) {
//     for(let j = 0; j < len; j++){
//       rz[i][j] = matrix[j][len - i - 1];
//     }
//   }
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//         matrix[i][j] = rz[i][j];
//     }
// }