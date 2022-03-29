/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result = strs[0];
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        while(j < result.length && j < strs[i].length){
            if(result[j] !== strs[i][j]){
                break;
            }
            j++;
        }
        result = result.substr(0, j);
    }
    return result;
};