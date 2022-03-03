/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    const map = new Map();
    for(char of s) {
        map.set(char, map.get(char) + 1 || 1);
    }
    for(i = 0; i < [...map].length; i++) {
        if([...map][i][1] === 1) return [...map][i][0];
    }
    return ' ';
};