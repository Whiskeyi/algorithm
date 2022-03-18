let NM = readline();
NM = [...NM.split(' ')].map(Number); // 数组NM存储第一行
let line; // 暂时存储接下来的N行
let Di = new Array(NM[0]); // 存储N行的工作难度Di
let Pi = new Array(NM[0]); // 存储N行的报酬Pi
for(let i = 0; i < NM[0]; i++) {
  line = readline();
  line = [...line.split(' ')].map(Number); // 转换line为数组
  Di.push(line[0]);
  Pi.push(line[1]);
}
let lastLine = readline();
let lastArr = [...lastLine.split(' ')].map(Number);
let rz = new Array(NM[1]);
let maxPay = -Infinity;
for(ai of lastArr) {
  for(let k = 0; k < NM[0]; k++) {
    if(ai >= Di[k]) maxPay = Math.max(maxPay, Pi[k]);
  }
  rz.push(maxPay);
  maxPay = -Infinity;
}
for(let j = 0; j < NM[1]; j++) {
  print(maxPay[j]);
}