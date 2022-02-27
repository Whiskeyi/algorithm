/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    let s_new = s.slice(n, s.length);
    s_new = s_new + s.slice(0, n);
    return s_new;
};