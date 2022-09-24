let n = 5;
let arr = [1, 2, 3, 4, 5];

const getResult = (n, arr) => {
  let map = new Map();
  for (let ar of arr) {
    map.set(ar, map.get(ar) + 1 || 1);
  }
  let noRepeatSum = [...map.keys()].length;

  return noRepeatSum === n ? n : n - noRepeatSum;
}

console.log(getResult(n, arr));