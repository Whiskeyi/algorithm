const str = 'baiduoxiaojiabankanjiaran';
// 1, 4辅音；2，3，5元音；每个字母不相同
const getResult = (str) => {
  let count = 0;
  for (let i = 0; i <= str.length - 5; i++) {
    let string = str.slice(i, i + 5);
    // 好像这里用new set会更方便
    let map = new Map();
    for (let st of string) {
      map.set(st, map.get(st) + 1 || 1)
    }
    if ([...map].length !== 5) {
      continue;
    } else {
      let sum = 0;
      let sums = 0;
      let index = 0;
      for (let st of string) {
        // 可以用has对方法，这里过于复杂
        if ((st !== 'a' || st !== 'e' || st !== 'i' || st !== 'o' || st !== 'u')
          && (index === 0 || index === 3)) {
          sum++
        }
        if ((st === 'a' || st === 'e' || st === 'i' || st === 'o' || st === 'u')
          && (index === 1 || index === 2 || index === 4)) {
          sums++;
        }
        index++;
      }
      if (sums === 3
        && sum === 2) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(getResult(str));