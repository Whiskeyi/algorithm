// 3 3
// 3 2 1

/* const line1 = read_line().split(' ').map(Number);
const n = line1[0];
const K = line1[1];
const line2 = gets(10000).split(' ').map(Number);
let len = line2.length;
[...new Set(line2)] */

const n = 4;
const K = 1;
const arr = [3, 2, 1, 4];

const getResult = (n, K, arr) => {
  arr = [...new Set(arr)];
  let sum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] * arr[j] >= K) {
        sum += 2;
      }
    }
  }
  return sum;
}

console.log(getResult(n, K, arr));
