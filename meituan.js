const n = 7;
const m = 3;
const S = 'abcaacc';
const s = 'a*c';

const getResult = (n, m, S, s) => {
  let count = 0;
  let rz = 0;
  for (let i = 0; i <= n - m; i++) {
    for (let j = 0; j < m; j++) {
      if (s[j] === '*') {
        count++;
        continue;
      } else if (s[j] === S[i + j]) {
        count++;
        continue;
      }
    }
    if (count === m) {
      rz++
    }
    count = 0;
  }
  return rz;
}

console.log(getResult(n, m, S, s));
