let line1 = readline().split(' ').map(Number);
let n = line1[0];
let m = line1[1];
let q = line1[2];

let arr = new Array(n).fill(0).map(() => new Array(m).fill(0));

// 数组赋值
for (let a = 0; a < n; a++) {
  let line = readline().split('')
  for (let b = 0; b < m; b++) {
    arr[a][b] = Number(line[b])
  }
}

// 1, 1
let op = readline().split(''); // [S,D,W,D,S,S,A]

const getFinallyPlace = (arr, op) => {
  let initX = 0;
  let initY = 0;
  for (let k = 0; k < op.length; k++) {
    if (initX >= 0 && initY >= 0 && initX < arr[0].length && initY < arr.length) {
      let operation = op[k];
      if (operation === 'W' && (initY - 1 >= 0) && arr[initY - 1][initX] === 0) {
        initY = initY - 1;
      }
      if (operation === 'S' && (initY + 1 < arr.length) && arr[initY + 1][initX] === 0) {
        initY = initY + 1;
      }
      if (operation === 'A' && (initX - 1 >= 0) && arr[initY][initX - 1] === 0) {
        initX = initX - 1;
      }
      if (operation === 'D' && (initX + 1 < arr[0].length) && arr[initY][initX + 1] === 0) {
        initX = initX + 1;
      }
      continue;
    } else {
      continue;
    }
  }
  return `${initY + 1} ${initX + 1}`
}

console.log(getFinallyPlace(arr, op))