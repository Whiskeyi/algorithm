// // let line1 = readline().split(' ').map(Number);
// // let n = line1[0];
// // let m = line1[1];
let n = 3;
let m = 3;
// let map = new Array(n).fill(0).map(arr => new Array(m).fill(0));
// // while (n) {
// // n--;
// // }
// 地图初始化
const map = [[0, 1, 0], [1, 1, 0], [1, 0, 0]];

let question = [[1, 1, 2], [3, 1, 4]];

const getResult = (map, question) => {
  question.forEach((arr) => {
    let copyMap = JSON.parse(JSON.stringify(map));
    let locationX = arr[0] - 1; // 0
    let locationY = arr[1] - 1; // 0
    let k = arr[2]; // 2
    while (k) {
      k--;
      let currState = copyMap[locationX][locationY];
      if (locationX < n - 1 && (copyMap[locationX + 1][locationY] !== currState)) {
        copyMap[locationX][locationY] = Number(!currState);
        locationX = locationX + 1;
        continue;
      }
      if (locationY < m - 1 && (copyMap[locationX][locationY + 1] !== currState)) {
        copyMap[locationX][locationY] = Number(!currState);
        locationY = locationY + 1;
        continue;
      }
      if (locationY > 0 && (copyMap[locationX][locationY - 1] !== currState)) {
        copyMap[locationX][locationY] = Number(!currState);
        locationY = locationY - 1;
        continue;
      }
      if (locationX > 0 && (copyMap[locationX - 1][locationY] !== currState)) {
        copyMap[locationX][locationY] = Number(!currState);
        locationX = locationX - 1;
        continue;
      }
      console.log(`${locationY + 1} ${locationX + 1}`);
    }
  })
}


getResult(map, question)