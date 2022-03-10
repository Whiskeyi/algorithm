/**
 * @param {string} s
 * @return {number}
 */
// 方法一
 var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};
// 方法二
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    const map = new Map();
    let key = 1;
    let max = 1;
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], 1);
        for(let j = 1; j < s.length - i; j++) {
            if(map.has(s[i + j])) {
                key = 1;
                map.clear();
                break;
            }else {
                key++;
                if(key > max) max = key;
                map.set(s[i + j], 1);
            }
        }
    }
    return max;
};
document.getElementsByTagName('ul')