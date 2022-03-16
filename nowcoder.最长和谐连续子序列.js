let str = '1 3 2 2 5 2 3 7';
var arr = [...str.split(' ')];
let maxLength = -Infinity;
// 判断是否为和谐序列
function isHarmonious(nums) {
    let min = Infinity, max = -Infinity;
    for(num of nums) {
        min = Math.min(parseInt(num), min);
        max = Math.max(parseInt(num), max);
    }
    if(max - min === 1) return true;
    else return false;
}
// 滑动窗口，遍历子序列
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j <= arr.length; j++) {
        if(isHarmonious(arr.slice(i, j))) maxLength = Math.max(maxLength, j - i);
    }
}
console.log(maxLength);