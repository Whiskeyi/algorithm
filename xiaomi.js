// for (let i = 1; i < strArr.length; i++) {
//   let j = 0
//   while (j < strArr[i].length && j < rz.length) {
//     if (rz[j] !== strArr[i][j]) {
//       break
//     }
//     j++
//   }
//   rz = rz.substr(0, j)
// }

let inputLine = gets(10000);
let strArr = inputLine.split(' '); // ['flower', 'flow', 'flight']

// let minLen = Infinity;

// strArr.forEach(item => {
//   minLen = Math.min(minLen, item.length)
// })

// for (let i = 0; i < minLen; i++) {
//   strArr.forEach(item => {
//     item.slice(i, i + 1);
//   })
// }
const getResult = (strArr) => {
  let rz = '';
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 1; j < strArr.length; j++) {
      if (strArr[0][i] !== strArr[j][i]) {
        return rz
      }
    }
    rz += strArr[0][i]
  }
}

print(getResult(strArr))
