/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  let rz = true;
  let map = new Map();
  for (let str of s) {
    map.set(str, map.get(str) + 1 || 1);
  }
  let mapKey = [...map.keys()];
  mapKey.forEach((item, index) => {
    if (s.lastIndexOf(item) - s.indexOf(item) - 1 !== distance[item.charCodeAt() - 97]) {
      rz = false;
    }
  })
  return rz;
};