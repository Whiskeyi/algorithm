/* 3 3 2
90 90 90
80 100 90
80 85 85 */

/* let line1 = read_line().split(' ').map(Number);
const n = line1[0];
const m = line1[1];
const id = line1[2];
let saveN = n;
let arr = [];
while (saveN) {
  saveN--;
  arr.push(gets(10000).split(' ').map(Number))
} */

const n = 3;
const m = 3;
const id = 2;
let arr = [];
arr[0] = [90, 90, 90];
arr[1] = [80, 100, 90];
arr[2] = [80, 85, 85];

const getResult = (n, m, arr) => {
  let sum = [];
  let max = 0;
  for (let i = 0; i < n; i++) {
    // for (let j = 0; j < m; j++) {
    sum.push(arr[i].reduce((total, cur) => total + cur));
    max = Math.max(max, arr[i].reduce((total, cur) => total + cur));
    // }
  }
  console.log(sum)
  let curr = sum[id - 1];
  sum.sort((a, b) => b - a);
  return sum.lastIndexOf(curr) + 1;
}

console.log(getResult(n, m, arr));
