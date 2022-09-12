const n = 5;
const arr = [1, 3, 6, 5, 1];

const CON = 10e9 + 7;

const getResult = (n, arr) => {
  let max = -Infinity;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      max = Math.max(fFun(i, j, arr), max);
    }
  }
  return max;
}

const fFun = (l, r, arr) => {
  let count = 0;
  for (let i = l; i <= r - 1; i++) {
    count += (Math.pow(-1, i - l) * Math.abs(arr[i] % CON - arr[i + 1] % CON));
  }
  return count;
}

console.log(getResult(n, arr));