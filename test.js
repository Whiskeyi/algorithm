// // 数组
// const arr = [1, 2]
// console.log(...arr);
// console.log([1, 2, 3].includes(1))

// const arr2 = [
//     [0,1,2,0],
//     [3,4,5,2],
//     [1,3,1,5]
//   ]
// console.log(arr2[0].length)
// // 字符串
// const str = "123"
// console.log(str.slice(0, 3))

// // 浅拷贝

// let a = {
//   name: "muyiy",
//   book: {
//       title: "You Don't Know JS",
//       price: "45"
//   }
// }
// let b = {...a};
// console.log(b);
// // {
// //     name: "muyiy",
// //     book: {title: "You Don't Know JS", price: "45"}
// // }

// a.name = "change";
// a.book.price = "55";
// console.log(a);
// // {
// //     name: "change",
// //     book: {title: "You Don't Know JS", price: "55"}
// // }
// console.log(b);
// // {
// //     name: "muyiy",
// //     book: {title: "You Don't Know JS", price: "55"}
// // }

// let str3 = '123'
// console.log([...str3].reverse().join(''))

// var nums = [0,1,0,3,12]
// nums.sort((m,n) => n? 0: -1)

// // 闭包
// /* for (var i = 1; i <= 5; i++) {
//   (function(j) {
//     setTimeout(function timer() {
//       console.log(j)
//     }, 1000)
//   })(i)
// } */

// for (var i = 1; i <= 5; i++) {
//   setTimeout(
//     function timer(j) {
//       console.log(j)
//     }, 0, i
//   )
// }


// const _deleteRepeat = array1 => {
//   // 补全代码
//   const map = new Map();
//   for(arr1 of array1) {
//       map.set(arr1, map.get(arr1) + 1 || 1)
//   }
//   console.log(map.keys());
// }
// _deleteRepeat([-1,1,2,2]);

// for(var i = 0; i < 10; ++i) {

//   setTimeout(function() {

//       console.log(i);

//   }, 1000);

// }
// console.log(typeof(null));
// console.log(null == Object);

// var result = 0;
// function test(result) {
//     result = 1;
// }
// test(2);
// console.log(result);

// function Test(name) { }
// Test.name='Tom';
// Test.prototype.name="John";
// var result = (new Test('JK')).name;
// console.log(result);

// console.log([1,undefined,3,5].map((_, n) => n));
// console.log(null === null);
// console.log(Symbol('a') === Symbol('a'));
// console.log(Symbol('a').for === Symbol('a').for);

// let name = 'outer'
// function showName() {
//   console.log(name)
//   let name = 'inner'
// }
// name = 'updatedOuter'
// showName()

// (function() {
//     var a = b = 5;
// })();
// console.log(b);
// console.log(a);

// var m= 1, j = k = 0;
//     function add(n) {
//         return n = n + 1;
//     }
//     y = add(m);
//     function add(n) {
//         return n = n + 3;
//     }
// z = add(m);
// console.log(y, z);
function add() {
    console.log('1');
}
console.log(typeof(add()))
var a=parseInt('111办公室');console.log(a);