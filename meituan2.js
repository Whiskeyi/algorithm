// let line1 = read_line().split(' ').map(Number);
// let n = line1[0]; // 2
// let m = line1[1]; // 1
// let line2 = read_line().split(' ').map(Number);
// let percent = line2; // [89,38]
// let line3 = read_line().split(' ').map(Number);
// let goal = line3; // [445,754]

let n = 2;
let m = 1;
let percent = [89, 38];
let goal = [445, 754];

function getRz(n, m, percent, goal) {
    let totalCut = [];
    let total = [];
    for (let i = 0; i < n; i++) {
        total.push(percent[i] * goal[i]);
        totalCut.push((100 - percent[i]) * goal[i]);
    }
    // 引用类型，数组浅拷贝
    let saveTotal = [...totalCut];
    let rz = total.reduce((item, rz) => item + rz);
    totalCut.sort((a, b) => a - b);
    for (let i = 0; i < m; i++) {
        let index = saveTotal.indexOf(totalCut[m - i]);
        rz -= total[index];
        rz += goal[index] * 100;
    }
    return (rz / 100).toFixed(2);
}

console.log(getRz(n, m, percent, goal));