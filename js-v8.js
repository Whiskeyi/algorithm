var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt

let line1 = readline().split(' ').map(Number);
let m = line1[0]; // 5
while (m) {
  m--;
  const lineFirst = readline().split(' ').map(Number); // [9, 4]
  const lineSec = readline().split(' ').map(Number); // [1,2,3,4,5,5,4,3,2]
  let key = 0;
  let start = 0;
  let end = 0;
  let keyEnd = 0
  for (let i = 0; i < lineFirst[0]; i++) {
    if (lineSec[i] >= lineFirst[1] && key === 0) {
      start = i;
      key = 1;
    }
    if (lineSec[i] < lineFirst[1] && key === 1 && keyEnd === 0) {
      end = i - 1;
      keyEnd = 1;
    }
  }
  if (key === 0) {
    console.log(false)
  } else {
    console.log(true + ' ' + start + ' ' + end)
  }
}
// 如何使用js输入很长的字符串~