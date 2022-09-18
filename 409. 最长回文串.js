/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var countObj = {};
  var res = 0;//最大
  for (var i = 0; i < s.length; i++) {
    if (!countObj[s[i]]) {
      countObj[s[i]] = 1;
    } else {
      res += 2;
      delete countObj[s[i]];
    }
  }
  if (s.length > res) { //剩余存在奇个数字符
    res += 1;
  }
  return res;
};