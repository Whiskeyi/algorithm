let n = 4;
let m = 4;
let k = 4;

let lineArr = [
  [1, 2, 3, 6],
  [2, 3, 1, 3],
  [3, 4, 2, 4],
  [3, 4, 2, 1],
]

// 8
// 1, 1, 2, 4

const getResult = (n, m, k, lineArr) => {
  let count = 0;
  let stack = [1];
  for (let i = 0; i < n; i++) {
  }
}

console.log(getResult(n, m, k, lineArr))

// let line1 = read_line().split(' ').map(Number);
// let line2 = gets(10000).split(' ').map(Number);
// let n = line1[0];
// let k = line1[1];
// let arr = line2;
// let n = 5;
// let k = 2;
// let arr = [3, 10, 5, 4, 2];

// const getResult = (n, k, arr) => {
//   let saveArr = [...arr];
//   arr.sort((a, b) => a - b); // 2,3,4,5,10

//   for (let i = 0; i < arr.length; i++) {
//     if (((arr.reduce((pre, cur) => pre += cur) / (n - i)) * k) >= arr[n - i - 1]) {
//       return arr.length;
//     }
//     arr.pop();
//   }
// }
// console.log(getResult(n, k, arr));
