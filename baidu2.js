const n = 1;
const arr = [101, 1111, 1011, 1010, 101010, 00000, 11111];

// let n = Number(readline());
// let arr = [];
// while(line = readline()) {
//     arr.push(line)
// }

const getResult = (item) => {
  let str = item.toString().replace(/11/g, '').replace(/00/g, '')
  if (str.length === 0) {
    return 0;
  } else if (str.length === 2) {
    return Infinity;
  } else if (str.length === 1) {
    return 1;
  } else if (str.length > 2) {
    return Math.floor((str.length + 1) / 2)
  }
}

arr.forEach(item => {
  if (getResult(item) <= n) {
    console.log('Yes')
  } else {
    console.log('No')
  }
})