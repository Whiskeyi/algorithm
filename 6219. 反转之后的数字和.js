
/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  if (num === 0) return true;
  for (let i = 0; i < num; i++) {
    let arr = [];
    let iStr = i.toString();
    for (let s of iStr) {
      arr.push(s)
    }
    if (i + Number(arr.reverse().join('')) === num) {
      return true
    }
  }
  return false
};