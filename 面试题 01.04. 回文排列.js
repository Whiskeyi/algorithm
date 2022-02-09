/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
    // 统计字符数量
    const map = new Map()
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    // 挑选出次数为奇数的
    const res = [...map].filter(item => item[1] & 1);
    return res.length <= 1;
};


//  var canPermutePalindrome = function(s) {
//     let obj = {};
//     for(let i=0; i<s.length; i++){
//       let char = s[i];
//       if(obj[char])
//         delete obj[char]
//       else
//         obj[char] = 1;
//     }
//     return Object.keys(obj).length <= 1;
//   };