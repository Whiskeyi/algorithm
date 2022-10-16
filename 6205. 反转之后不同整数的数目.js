/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  nums = new Set([...nums]);
  let rz = [];
  for (let num of nums) {
    let arr = [];
    let numStr = num.toString();
    for (let s of numStr) {
      arr.push(s)
    }
    rz.push(Number(arr.reverse().join('')))
  }
  rz = new Set([...nums].concat(rz))
  return [...rz].length
};