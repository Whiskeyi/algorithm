function maxAppearNums(s) {
    const map = new Map();
    for(num of s) {
        map.set(num, map.get(num) + 1 || 1);
    }
    let maxN = Math.max(...map.values());
    map.forEach((item, key) => {
      if(item === maxN) return key
    })
  }

var str ='';
while(str = readline())
{
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    var key = str[i];
    if(!obj[key]) {
      obj[key] = 1;
    }else {
      obj[key]++;
    }
  }
  let maxKey = str[0],
  maxCount = obj[str[0]];
  Object.keys(obj).forEach((key, index) => {
    if(obj[key] > maxCount) {
      maxCount = obj[key];//记录较大的次数
      maxKey = key;//记录较大的key值
    }
  })
  print(maxKey);
}