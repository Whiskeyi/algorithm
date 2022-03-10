// 数组
const arr = [1, 2]
console.log(...arr);
console.log([1, 2, 3].includes(1))

const arr2 = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]
console.log(arr2[0].length)
// 字符串
const str = "123"
console.log(str.slice(0, 3))

// 浅拷贝

let a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  }
}
let b = {...a};
console.log(b);
// {
//     name: "muyiy",
//     book: {title: "You Don't Know JS", price: "45"}
// }

a.name = "change";
a.book.price = "55";
console.log(a);
// {
//     name: "change",
//     book: {title: "You Don't Know JS", price: "55"}
// }
console.log(b);
// {
//     name: "muyiy",
//     book: {title: "You Don't Know JS", price: "55"}
// }

let str3 = '123'
console.log([...str3].reverse().join(''))

var nums = [0,1,0,3,12]
nums.sort((m,n) => n? 0: -1)

// 闭包
/* for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, 1000)
  })(i)
} */

for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    }, 0, i
  )
}


const _deleteRepeat = array1 => {
  // 补全代码
  const map = new Map();
  for(arr1 of array1) {
      map.set(arr1, map.get(arr1) + 1 || 1)
  }
  console.log(map.keys());
}
_deleteRepeat([-1,1,2,2]);