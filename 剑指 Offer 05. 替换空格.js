/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    let n = s.split(" ");
    let new_s = '';
    for(i = 0; i < n.length; i++) {
        if(i < n.length - 1) {
            new_s = new_s + n[i] + '%20';
        }
        else {
            new_s += n[i];
        }
    }
    return new_s;
};