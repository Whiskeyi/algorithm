/* // 数组
const arr = [1, 2]
console.log(...arr);
console.log([1, 2, 3].includes(1)) */

/* const arr2 = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]
console.log(arr2[0].length)
// 字符串
const str = "123"
console.log(str.slice(0, 3)) */

/* // 浅拷贝

let a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  }
}
let b = {...a};
console.log(b);
{
    name: "muyiy",
    book: {title: "You Don't Know JS", price: "45"}
} */

/* a.name = "change";
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
// } */

/* let str3 = '123'
console.log([...str3].reverse().join(''))

var nums = [0,1,0,3,12]
nums.sort((m,n) => n? 0: -1) */

// 闭包
/* for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, 1000)
  })(i)
} */

/* for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    }, 0, i
  )
} */


/* const _deleteRepeat = array1 => {
  // 补全代码
  const map = new Map();
  for(arr1 of array1) {
      map.set(arr1, map.get(arr1) + 1 || 1)
  }
  console.log(map.keys());
}
_deleteRepeat([-1,1,2,2]); */

/* for(var i = 0; i < 10; ++i) {
  setTimeout(function() {
      console.log(i);
  }, 1000); */

/* }
console.log(typeof(null));
console.log(null == Object); */

/* var result = 0;
function test(result) {
    result = 1;
}
test(2);
console.log(result); */

/* function Test(name) { }
Test.name='Tom';
Test.prototype.name="John";
var result = (new Test('JK')).name;
console.log(result); */

/* console.log([1,undefined,3,5].map((_, n) => n));
console.log(null === null);
console.log(Symbol('a') === Symbol('a'));
console.log(Symbol('a').for === Symbol('a').for); */

/* let name = 'outer'
function showName() {
  console.log(name)
  let name = 'inner'
}
name = 'updatedOuter'
showName() */

/* (function() {
    var a = b = 5;
})();
console.log(b);
console.log(a); */

/* var m= 1, j = k = 0;
    function add(n) {
        return n = n + 1;
    }
    y = add(m);
    function add(n) {
        return n = n + 3;
    }
z = add(m);
console.log(y, z);
function add() {
    console.log('1');
}
console.log(typeof(add()))
var a=parseInt('111办公室');console.log(a); */

// 浅拷贝，无法改变值
/* var arr = [{old: 'old'}, ['old'], 'old'];
var new_arr = arr.concat();
arr[0].old = 'new';
arr[1][0] = 'new';
console.log(arr);
console.log(new_arr);
 */

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input:', (answer) => {
  // TODO：记录答案到数据库中
  console.log(typeof(answer));
  rl.close();
}); */

/* let str = '123 412';
let arr = [...str.split(' ')]
console.log(arr.map(Number)); */

/* var output = (function(x){
  delete x;
  console.log(x);
})(0); */

/*
var str1=new RegExp("e");
console.log(str1.exec("hello")); */

/* function Foo(){
  var i=0;
  return function(){
      console.log(i++);
  }
}
var f1=Foo(),
f2=Foo();
f1();
f1();
f2(); */

/* const array = new Array(5).map((item) => {
  return item = {
    name: '1'
  }
});
console.log(array); */

/* var fooIsAnArray = [1,2,3], i=0;
for(;i<2;i++) {
  fooIsAnArray.splice(i, 1);
}
console.log(fooIsAnArray); */

/* val = 1;
var json = {
  val: 10,
  exec: function(fn) {
    this.val = this.val + val + fn(val);
  } // 10 + 1 + 9
};
var fn = (function(val) {
  return function() {
    return val * 2 + this.val;
  }; // 9
})(4);
json.exec(fn); // 20
console.log(val + json.val); // 1 + 20 */

/* (function(){
  console.log(1);
}) */
/* fun();
function fun(){console.log(1)}
//提升后
function fun(){console.log(1)}
fun(); //正常执行fun(),输出1 */
/* fn();
var fn = function(){console.log(1);};
//实际上
var fn //提升变量
fn()  // fn is not a function
fn = function(){console.log(1)} //原来的位置 */

/* console.log(([])?true:false);
console.log(([]==false?true:false));
console.log(({}==false)?true:false); */

// var a = []; console.log(typeof a);

// console.log( 0 === false);s