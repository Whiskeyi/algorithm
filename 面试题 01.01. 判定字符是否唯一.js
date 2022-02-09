/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    let k = 0; // 0表示无重复
    for(i = 0; i <= astr.length; i++) {
        for(j = i + 1; j <= astr.length; j++) {
            if(astr[i] == astr[j]) {
                k = 1;
                return false;
            }
        }
    }
    return true;
};