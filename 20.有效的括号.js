/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 替换，判断长度
  // while (true) {
  //   let len = s.length;
  //   s = s.replace("()", "");
  //   s = s.replace("{}", "");
  //   s = s.replace("[]", "");
  //   if (s.length === len) {
  //     return len === 0;
  //   }
  // }
  // 利用栈处理
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);
  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    }
    else {
      stk.push(ch);
    }
  };
  return !stk.length;
};