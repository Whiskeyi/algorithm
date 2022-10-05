/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {

  let map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);
  let sum = 0;
  for (let i = 0, j = i + 1; i < s.length; i++, j++) {
    if (map.get(s[i]) < map.get(s[j])) {
      sum += map.get(s[j]) - map.get(s[i])
      i++;
      j++;
    } else {
      sum += map.get(s[i])
    }
  }
  return sum;
};