let arr1 = [8, 800];
let arr2 = [1, 0, 2, 2, 0, 1, 0];

const getResult = (arr1, arr2) => {
  let map = new Map();
  for (let num of arr2) {
    map.set(num, map.get(num) + 1 || 1);
  }
  if (arr1[1] === 400) {
    return `${(map.get(2) || 0) + 1} ${(map.get(1) || 0) + (map.get(2) || 0) + 1}`
  }
  if (arr1[1] >= 800) {
    return `1 ${(map.get(2) || 0) + 1}`;
  } else if (arr1[1] > 400) {
    return `${(map.get(2) || 0) + 1} ${(map.get(1) || 0) + (map.get(2) || 0) + 1}`;
  } else {
    return `${(map.get(1) || 0) + (map.get(2) || 0) + 1} ${arr1[0]}`
  }
}

console.log(getResult(arr1, arr2));