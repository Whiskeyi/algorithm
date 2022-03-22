/* 描述
小易很喜欢斑马，因为它们身上黑白相间的花纹。
一天小易得到了一串橡皮泥，这串橡皮泥只有黑色和白色，小易想把这串橡皮泥重新拼凑一下，让这个橡皮泥串中最长的连续的黑白相间的子串最长，但是小易有强迫症，所以他可以对橡皮泥串进行以下的操作0次或多次：
把橡皮泥串从某个地方切割开，将两个得到的两个串同时翻转，再拼接在一起。
这个橡皮泥串可能太长了，所以小易没有办法计算最终可以得到的最长的连续的黑白相间的子串的长度，希望你能帮他计算出这个长度。
输入描述：
一个字符串s，只包含字母'b'和字母'w'，分别表示黑色和白色的橡皮泥块。
满足1 <= |s| <= 105，|s|代表字符串的长度。
输出描述：
一个整数，表示改变之后最长的连续的黑白相间的子串的长度。 */

// let strs = 'wwb';
let strs = readline();
strs = strs + strs;
let maxLen = 1;
let len = 1;
for(let i = 0; i < strs.length; i++) {
    if(strs[i] !== strs[i + 1]) {
        len++;
        maxLen = Math.max(len, maxLen);
    }else len = 1;
}
if(maxLen > strs.length / 2) console.log(strs.length / 2);
else console.log(maxLen);