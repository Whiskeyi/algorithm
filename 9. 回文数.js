const x = 10;
// 双指针
const isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    x = x.toString();
    for(let i = 0, j = x.length - 1; i <= j; i++, j--) {
        if(x[i] === x[j]) continue;
        else return false;
    }
    return true;
}
console.log(isPalindrome(x));