let strArr = ['aabc', 'aaaa', 'aabb', 'aaabb', 'abcde'];

const getResult = (strArr) => {
  let rz = [];
  strArr.forEach(str => {
    let countObj = {};
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (!countObj[str[i]]) {
        countObj[str[i]] = 1;
      } else {
        res += 2;
        delete countObj[str[i]];
      }
    }
    if (str.length > res) {
      res += 1;
    }
    rz.push(res)
  })
  return rz;
}

getResult(strArr).forEach(num => {
  console.log(num)
});