/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = new Map([
    [2, 'abc'],
    [3, 'def'],
    [4, 'ghi'],
    [5, 'jkl'],
    [6, 'mno'],
    [7, 'pqrs'],
    [8, 'tuv'],
    [9, 'wxyz']
  ])
  const rz = [], path = [];
  const backTracking = (digits, index) => {
    if (index === digits.length) {
      rz.push([...path].join(''));
      return;
    }
    let digit = Number(digits[index]);
    let letters = map.get(digit);
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);
      backTracking(digits, index + 1);
      path.pop();
    }
  }
  if (!digits.length) return [];
  backTracking(digits, 0);
  return rz;
};