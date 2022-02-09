/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    let s = "";
    for(i = 0; i <= length - 1; i++) {
        if (S[i] == " ") {
            s = s + "%20";
        } else s = s + S[i];
    }
    return s;
};