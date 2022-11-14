/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  function gcd(a, b) {
    let temp;
    while (b != 0) {
      temp = a % b;
      a = b;
      b = temp;
    }
    return a;
  }
  function scm(a, b) {
    return (a * b) / gcd(a, b);
  }
  function scms(arr) {
    let len = arr.length, midNum = arr[0];
    for (let i = 1; i < len; i++) {
      midNum = scm(midNum, arr[i]);
    }
    return midNum;
  }
  let rz = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let newArr = nums.slice(i, j);
      let res = scms(newArr);
      // 剪枝
      if (k % res !== 0) {
        break;
      }
      if (res === k) rz++
    }
  }
  return rz
};

console.log(subarrayLCM([3, 6, 2, 7, 1], 6))