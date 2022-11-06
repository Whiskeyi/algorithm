const n = 467, target = 6;
// const n = 16, target = 6;
// const n = 19, target = 1;

/**
 * 整体思路【贪心】，从末尾往前依次 加上 能进位的数字大小
 */
var makeIntegerBeautiful = function (n, target) {
  // 分隔n为数字数组
  let nArr = n.toString().split('').map(Number)
  // 数组求和
  let sum = nArr.reduce((pre, cur) => pre + cur)
  // 需要添加的数字
  let rz = 0
  // 记录当前执行到第 base + 1 次
  let base = 0
  for (let i = nArr.length - 1; i >= 0; i--) {
    // 每次执行判断是否符合结果，若符合直接输出
    if (sum <= target) return rz
    let currNum = nArr[i]
    // 更新结果
    sum = sum - currNum + 1
    rz += Math.pow(10, base) * (10 - currNum)
    // 每次操作前一位进一
    nArr[nArr.length - 2 - base]++
    base++
  }
  return rz
};

console.log(makeIntegerBeautiful(n, target))