/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
    let S1 = [...s1];
    let S2 = [...s2];
    if(s1.length != s2.length) return false;
    if(S1.sort().toString() == S2.sort().toString()) {
        return true;
    } else return false;
};