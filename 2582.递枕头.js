var passThePillow = function(n, time) {
  if (time < n) {
    return time + 1;
  } else {
    let k = time - n + 1;
    let arr = [];
    for(let i = 1; i <= n - 1; i++) {
      arr.push(n - i);
    }
    for(let i = 1; i <= n - 1; i++) {
      arr.push(i + 1);
    }
    return arr[(k % (2 * (n - 1))) - 1] || arr[2 * (n - 1) - 1];
  }
};

console.log(passThePillow(2, 341))