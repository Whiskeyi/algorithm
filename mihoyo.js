var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var n = -1;
var cur_line = 0;
rl.on('line', function (line) {
  if (n < 0) {
    n = parseInt(line.trim())
  } else {
    var students = line.split(' ');
    cur_line += 1;
  }
  // n = 5, students = [ '161', '180', '171', '173', '185' ]
  const getResult = (n, students) => {
    // 奇数
    let odd = [];
    // 偶数
    let even = [];
    let rz = '';
    for (let i = 0; i < students.length; i++) {
      if (students[i][students[i].length - 1] % 2 === 0) {
        even.push(i)
      } else {
        odd.push(i)
      }
    }
    let minLen = Math.min(even.length, odd.length)
    for (let i = 0; i < minLen; i++) {
      rz += ' ' + students[odd[i]] + ' '
      rz += students[even[i]]
    }
    for (let m = minLen; m < odd.length; m++) {
      rz += ' ' + students[odd[m]]
    }
    for (let k = minLen; k < even.length; k++) {
      rz += ' ' + students[even[k]]
    }
    let result = rz.trim().split(' ');
    result.unshift(result.pop())
    return result.toString().replace(/,/g, ' ');
  }
  if (cur_line === 1) {
    console.log(getResult(n, students));
  }
});