let n = 6;
let arr = [1, 1, 2, 3, 2, 3];

// let n = Number(readline());
// let arr = readline().split(' ').map(Number);
let mp = 0;

for (let ar of arr) {
  mp += ar;
}

let count = 0;

for (let i = 0; i < mp - 2; i++) {
  if (arr[i] >= 1 && arr[i + 1] >= 2 && arr[i + 2] >= 3) {
    arr[i] -= 1;
    arr[i + 1] -= 2;
    arr[i + 2] -= 3;
    i = 0;
    count += 1;
  }
}

console.log(mp - count);