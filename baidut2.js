const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line1 = await readline();
    let n = Number(line1);
    const line2 = await readline();
    let arrA = line2.split(' ').map(Number);
    const line3 = await readline();
    let arrB = line3.split(' ').map(Number);
    let exchangeBaseArr = [];
    for (let i = 0; i < n; i++) {
        if (arrA[i] <= arrB[i]) {
            exchangeBaseArr.push(1 / arrA[i] * arrB[i]);
        }
    }
    let maxBase = Math.max.apply(Math, exchangeBaseArr);
    let rz = 1;
    for (let i = 0; i < n; i++) {
        rz = (rz * arrA[i]) % (Math.pow(10, 9) + 7)
    }
    console.log(Math.floor(rz * maxBase % (Math.pow(10, 9) + 7)))
}()