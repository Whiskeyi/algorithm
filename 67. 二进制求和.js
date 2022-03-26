/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 双指针
const addBinary = (a, b) => {
    const res = [];
    // 进位符
    let c = 0;
    let [i, j] = [a.length - 1, b.length - 1];
    while (i >= 0 || j >= 0 || c) {
        // 获取指针指向的数字
        const aa = Number(a[i]) ? Number(a[i]) : 0;
        const bb = Number(b[j]) ? Number(b[j]) : 0;
        let sum = aa + bb + c;
        if (sum === 2) {
            // sum为2，进位，sum归0
            sum = 0;
            c = 1;
        } else if (sum === 3) {
            // sum为3，进位，sum归1
            sum = 1;
            c = 1;
        } else {
            c = 0;
        }
        res.unshift(sum);
        i--;
        j--;
    }
    return res.join('');
};