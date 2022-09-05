const s = "abaccb", distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var checkDistances = function (s, distance) {
  let map = new Map();
  let count = 0;
  let total = s.length / 2;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (distance[s[i].charCodeAt() - 97] === i - map.get(s[i]) - 1) {
        count++
      }
    } else {
      map.set(s[i], i)
    }
  }
  if (total === count) return true;
  return false;
};

console.log(checkDistances(s, distance))