let n = parseInt(readline());
let arr = readline().split(" ").map(Number);

const getResult = (n, arr) => {
  let len = arr.length;
  let rz = [];
  for (let i = 1; i <= len; i++) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    if (i % 2 === 1) {
      if (first > last) {
        rz.push(arr.shift());
      } else {
        rz.push(arr.pop());
      }
    } else {
      if (first < last) {
        rz.push(arr.shift());
      } else {
        rz.push(arr.pop());
      }
    }
  }
  return rz.join(' ');
};

console.log(getResult(n, arr));
