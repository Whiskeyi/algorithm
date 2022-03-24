/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b); // 胃口
    s.sort((a, b) => a - b); // 饼干尺寸
    let maxNum = 0;
    for(let i = 0; i < g.length;) {
        while(s.length >= 1) {
            if(g[i] > s[0]) s.shift();
            else {
                i++;
                s.shift();
                maxNum++
            }
        }
        break;
    }
    if(maxNum >= g.length) return g.length
    else return maxNum;
};