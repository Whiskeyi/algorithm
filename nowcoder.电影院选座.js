// 1 0 0 0 1 0 1
let str = '0 1 0 0 1 1 0 0 0 0 0'
// console.log([...str.split(' ')]);
let arr = [...(str.split(' '))];
console.log(arr);
let [left, right] = [0, 0];
var maxShort = [];
// let arr = [...readline().split(' ')];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
        let [m, n] = [i, i];
        // 设置m, n双指针
        while(m >= 0) {
            m--;
            if(arr[m] == 1) left = m;
        }
        while(n < arr.length) {
            n++;
            if(arr[n] == 1) {
                right = n;
                break;
            }
        }
        if(i == 0 || i == arr.length - 1) maxShort.push(Math.max(i - left, right - i));
        else maxShort.push(Math.min(i - left, right - i));
    }
}
console.log(maxShort);
console.log(maxShort.sort()[maxShort.length - 1]);