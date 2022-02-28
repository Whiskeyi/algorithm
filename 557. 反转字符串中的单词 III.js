/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let s_new = s.split(' ');
    let rz = '';
    for(i = 0; i < s_new.length; i++) {
        if(i == s_new.length - 1) {
            rz += reverse(s_new[i]);
        } else {
            rz += reverse(s_new[i]) + ' ';
        }
    }
    return rz;
    function reverse(str) {
        return [...str.split('')].reverse().join('');
    }
};