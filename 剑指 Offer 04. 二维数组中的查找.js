/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    if(matrix == null || matrix.length === 0 || matrix[0].length === 0) return false;
    let i = 0;
    let j = matrix[0].length - 1;
    while(i < matrix.length && j >= 0) {
        if(matrix[i][j] === target) return true;
        else if(matrix[i][j] < target) i++;
        else j--;
    }
    return false;
};