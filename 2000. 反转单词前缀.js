/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    var rz = "";
    let num = word.indexOf(ch)
    for(i = num; i >= 0; i--) {
        rz = rz + word[i]
    }
    rz = rz + word.slice(num+1, word.length)
    return rz;
};