/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
       const row = new Array(m).fill(false);
       const col = new Array(n).fill(false);
       for (let i = 0; i < m; i++) {
           for (let j = 0; j < n; j++) {
               if (matrix[i][j] === 0) {
                   row[i] = col[j] = true;
               }
           }
       }
       for (let i = 0; i < m; i++) {
           for (let j = 0; j < n; j++) {
               if (row[i] || col[j]) {
                   matrix[i][j] = 0;
               }
           }
       }
   };
// matrix =
    // [[3,7,2,8,2],[2,2,4,1,8],[0,5,7,6,3],[8,1,0,7,7],[1,3,7,4,1],[6,5,5,6,3],[7,1,0,1,9],[5,4,4,9,7],[2,2,4,1,0],[7,1,1,9,1],[8,0,4,7,6],[7,5,1,2,3],[7,2,5,9,3]];
    // let s = "";
    // let n = matrix.length;
    // let o = matrix[0].length;
    // let rz = matrix;
    // for(i = 0; i < n; i++) {
    //     for(j = 0; j < o; j++) {
    //         if(matrix[i][j] == 0) {
    //             s = s + i.toString() + j.toString();
    //         }
    //     }
    // }
    // for(p = 0; p < s.length; p += 2) {
    //     rz = clearAll(rz, s[p], s[p + 1]);
    // }
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < o; j++) {
    //         matrix[i][j] = rz[i][j];
    //     }
    // }
    // console.log(matrix);
    // function clearAll(m, a, b) {
    //     for(j = 0; j < n; j++) {
    //         // 清除列
    //         m[j][b] = 0;
    //     }
    //     for(k = 0; k < o; k++) {
    //         // 清除行
    //         m[a][k] = 0;
    //     }
    //     return m;
    // }