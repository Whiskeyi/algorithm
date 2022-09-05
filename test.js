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
  name: "muYiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  }
}
let b = {...a};
console.log(b);
{
    name: "muYiy",
    book: {title: "You Don't Know JS", price: "45"}
} */

// let nums = [5,4,3,2,1];
// console.log(nums.sort((a, b) => a - b));

/* a.name = "change";
a.book.price = "55";
console.log(a);
// {
//     name: "change",
//     book: {title: "You Don't Know JS", price: "55"}
// }
console.log(b);
// {
//     name: "muYiy",
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

/* async function async1() {
    console.log("2");
    await  async2();
    console.log("7");

  }
  async function async2() {
   console.log( '3');
  }
  console.log("1");
  setTimeout(function () {
    console.log("8");
  },0);
  async1();
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("6");
  });
  console.log('5'); */

/*  showName()
 var showName = function() {
   console.log(2);
 }
 function showName() {
   console.log(1);
 } */

/*   function foo() {
      var a = 1;
      let b = 2;
      {
          let b = 3;
          var c = 4;
          let d = 5;
          console.log(a);
          console.log(b);
      }
      console.log(b);
      console.log(c);
      console.log(d);
  }
  foo(); */

/*   let myName = '极客时间'
  {
      console.log(myName)
      let myName = '极客邦'
  } */

/*  function bar() {
   var myName = '极客世界';
   let test1 = 100;
   if(1) {
     let myName = 'Chorme浏览器';
     console.log(test);
   }
 }
 function foo() {
   var myName = '极客邦';
   let test = 2;
   {
     let test = 3;
     bar();
   }
 }
 var myName = "极客时间"
 let myAge = 10;
 let test = 1;
 foo(); */

/*  var bar = {
   myName: "time.geekBang.com",
   printName: function() {
     console.log(myName);
     console.log(this.myName);
   }
 }
 function foo() {
   let myName = "极客时间";
   return bar.printName;
 }
 let myName = "极客邦";
 let _printName = foo();

 _printName();
 bar.printName(); */

/* function executor(resolve, reject) {
  let rand = Math.random();
  console.log(1);
  console.log(rand);
  if(rand > 0.5) resolve();
  else reject();
}
var p0 = new Promise(executor);
var p1 = p0.then((value) => {
  console.log("succeed-1");
  return new Promise(executor);
})
var p3 = p1.then((value) => {
  console.log("succeed-2");
  return new Promise(executor);
})
var p4 = p3.then((value) => {
  console.log("succeed-3");
  return new Promise(executor);
})
p4.catch((error) => {
  console.log("error");
})
console.log(2); */

/* function executor(resolve, reject) {
  resolve(100);
}
let demo = new Promise(executor);
function onResolve(value) {
  console.log(value);
}
demo.then(onResolve); */

// 模拟实现Promise
/* function Promise(executor) {
  var onResolve_ = null;
  var onReject_ = null;
  // 模拟实现resolve和then，暂不支持reject
  console.log(this);
  this.then = function(onResolve, onReject) {
    onResolve_ = onResolve;
  };
  function resolve(value) {
    setTimeout(() => {
      onResolve_(value);
    },0);
  }
  executor(resolve, null);
}

function executor(resolve, reject) {
  resolve(100);
}
let demo = new Promise(executor);
function onResolve(value) {
  console.log(value);
}
demo.then(onResolve); */

/*   // ES7 async/await
  async function foo() {
    try{
      let response1 = await fetch('https://www.geekbang.org');
      console.log('response1');
      console.log(response1);
      let response2 = await fetch('https://www.geekbang.org/test');
      console.log('response2');
      console.log(response2);
    }catch(err) {
      console.error(err);
    }
  }
  foo(); */

/*   async function foo() {
    console.log(1);
    let a = await 100;
    console.log(a);
    console.log(2);
  }
  console.log(0);
  foo();
  console.log(3); */

/* async function foo() {
  console.log('foo');
}
async function bar() {
  console.log('bar start');
  await foo();
  console.log('bar end');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
bar();
new Promise(function(resolve) {
  console.log('promise executor');
  resolve();
}).then(function() {
  console.log('promise then');
})
console.log('script end'); */

/*   var k = 0;
  for(var i=0,j=0;i<10,j<6;i++,j++){
      k += i + j;
  }
  console.log(k); */
/*
  var a = 4399 < 0 || typeof(4399 + '');
  console.log(a);
 */

/* let A = function() {}
A.prototype.a = 1;
let B = new A();
A.prototype = {
  b: 2,
  c: 3
}
let C = new A();
A.prototype.d = 4;
console.log(B.a);
console.log(B.b);
console.log(C.c);
console.log(C.d); */

// console.log(+new Array(017));

/* var i = 100;
function foo() {
    bbb: try {
        console.log("position1");
        return i++;  }
    finally {
        break bbb;
    }
    console.log("position2");
    return i;
}
foo();
console.log(i); */

/* var name="World!";
(function(){
    var name;
    if(typeof name=== 'undefined'){
        name='Jack';
        console.log('Goodbye'+name);
    }
    else{
        console.log('hello'+name);
    }
})(); */

// for(let i=0;i<12;i++){} console.log(i);
/* const a = 12;a=13;
console.log(a); */

/* const g = {b:3};
console.log(g.b);
g.b=12;console.log(g.b);
let [head,...tail] = [1,2,3,4];
console.log(tail); */

/* function outer(){
  var num = 0;
   function inner(){
        num++;
        console.log(num);
  }
      return inner;
}
var f1 = outer();
f1();
f1();
var f2 = outer();
f2();
f2(); */

/* var p1 = {
  name:'小明',
  age:'12',
  action:function(where,doing){
   console.log(this.age + '岁的'+this.name + '在' + where + doing);
  }
}
var p2 = {
  name:'小红',
  age:'15'
}
console.log(p1.action.call(p2,'操场上','运动')) */

/* var a = 'w'
let obj = {
  a: 'o',
  print: function() {
    console.log(this.a);
  },
  print2: () => {
    console.log(this.a);
  }
}
let p = obj.print;
let p2 = obj.print2;
obj.print();
obj.print2();
p();
p2(); */

/* var foo= "Hello";
(function(){
    var bar = "World";
    alert(foo + bar);
})();
alert(foo + bar); */

/* var user = {
  count : 1,
  getCount: function(){
   return this.count;
  }
 }
 var func = user.getCount
 console.log(func()) */

/*  (function() {
  var x = foo();
  var foo = function foo() {
      return "foobar"
  };
  console.log(x);
})(); */

/* let a = 1;
let obj = {
  x: 1
}
delete a;
delete obj.x;
delete 2;
console.log(a);
console.log(obj.x);
console.log(2); */

/* let date = new Date()
setTimeout(() => {
    console.log('1')
}, 2000)
setTimeout('console.log(2)',1000);
setTimeout(function() {
  console.log('3')
}, 1500);
while((new Date() - date) < 3000) {} */

/* let arr = [0, 2, 4, 5];
console.log(arr.reduce((s, t) => s += t)); */

/* console.log(typeof undefined);
console.log(Number(null)); */

/* Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log) */

/*   const p = function() {
    return new Promise((resolve, reject) => {
      const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1)
        }, 0)
        resolve(2)
      })
      p1.then((res) => {
        console.log(res);
      })
      console.log(3);
      resolve(4);
    })
  }
  p().then((res) => {
    console.log(res);
  })
  console.log('end') */

/* var number = 5;
var obj = {
  number: 3,
  fn1: (function() {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function() {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    }
  })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(window.number); */

/* var obj = {
  hi: function () {
    console.log(this);
    return () => {
      console.log(this);
    }
  },
  sayHi: function () {
    return function () {
      console.log(this);
      return () => {
        console.log(this);
      }
    }
  },
  say: () => {
    console.log(this);
  }
}
let hi = obj.hi();  //输出obj对象
hi();               //输出obj对象
let sayHi = obj.sayHi();
let fun1 = sayHi(); //输出window
fun1();             //输出window
obj.say();          //输出window */

/* async function async1(){
  console.log('async1')
  await async2()
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}
console.log('script start')
setTimeout(() =>{
  console.log('setTimeOut')
},0)
async1()
new Promise((resolve) => {
  console.log('promise')
  resolve()
}).then(() =>{
  console.log('promise2')
})
console.log('script end') */

// script start
// async1
// async2
// promise
// script end
// async1 end
// promise 2
// setTimeout

/* var array = [4, 2, 5, 3, 1];
function compare(a, b) {
  console.log(a,b);
  return a - b;
}
array.sort(compare);
// 比较 + 二分 */

/* const arr = [1, 1, 2, 2, 3, 3, 3];
function deRepeat() {
  return [...new Set(arr)]
}
console.log(deRepeat(arr)) */

/* var o = new Object
o[Symbol.iterator] = function() {
    var v = 0
    return {
        next: function() {
            return { value: v++, done: v > 10 }
        }
    }
};
for(var v of o)
    console.log(v); // 0 1 2 3 ... 9 */

/* const map = new Map();
map.set(0, 1);
console.log(map.get(1) + 1 || 1) // NaN || 1
map.get(num) ? map.get(num) + 1 : 1 */

// console.log(Math.max())

/* var a = '011'
console.log(parseInt(a)) */

// console.log(false == undefined)

/* console.log(null instanceof Object);
console.log(typeof(null)) */

/* var x = 1;
console.log(x++ + ++x + x) // 1 + 3 + 3 */

/* var str = "what is this";
var k = str.search("is");
console.log(k) */

/* new Promise((resolve, reject) => {
  console.log("外部promise");
  resolve();
})
  .then(() => {
    console.log("外部第一个then");
    new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
      .then(() => {
        console.log("内部第一个then");
      })
      .then(() => {
        console.log("内部第二个then");
      });
    return new Promise((resolve, reject) => {
      console.log("内部promise2");
      resolve();
    })
      .then(() => {
        console.log("内部第一个then2");
      })
      .then(() => {
        console.log("内部第二个then2");
      });
  })
  .then(() => {
    console.log("外部第二个then");
  }); */

// 外部promise
// 外部第一个then
// 内部promise
// 内部promise2
// 内部第一个then
// 内部第一个then2
// 内部第二个then
// 内部第二个then2
// 外部第二个then

/* let arr = [1, 3, 3, 4, 5, null, 'X'];
arr.splice(0, 1, 2)
console.log(arr) */

/* const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = object_create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

function object_create(obj) {
  // obj为新创建对象的原型对象
  function F() { };
  F.prototype = obj;
  return new F();
} */

/* function instance_of(left, right) {
  let proto = Object.getPrototypeOf(left), // 获得对象的原型
    prototype = right.prototype; // 获取构造函数的 prototype 对象
  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// 测试
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(instance_of(auto, Car));
// expected output: true

console.log(instance_of(auto, Object));
// expected output: true */

// console.log(undefined == 0);

// let [, second, fourth] = [1, 2, 3, 4];
// console.log(fourth); // 3

// let arr = [];
// console.log(valueOf(arr), arr.toString())

// const one = 0.1
// const two = 0.2
// const three = 0.3
// console.log([two - one == one, three - two == one]);

/* let arr = [, , , , ,]
console.log(arr.length) */

/* function A(cName) {
  if (cName) {
    this.name = cName
  }
}
A.prototype.name = 'XiaoMi'
var a = new A()
console.log('A', a.name) */

/* function B(cName) {
  this.name = cName
}
B.prototype.name = 'Xiaomi'
var b = new B()
console.log('B', b.name) */

/* let oldValue = 2;
let newValue = oldValue << 3;
console.log(newValue) */

/* var callbacks = []
for (var i = 0; i < 4; i++) {
  callbacks.push(function () {
    console.log(i);
  });
}
callbacks.forEach(cb => cb()); */

// var obj = { a: 1, b: function () { console.log(this.a) } };
// var fun = obj.b;
// console.log(fun())

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// console.log(getPersonInfo`${person} is ${age} years old`)


/* // 箭头函数，this指向弄弄透
let x = 10;
let foo = () => {
  console.log(x)
  let x = 20;
  x++;
}
foo(); */

/* console.log(/\W/.test('abc'));
console.log(/\d/.test('abc'));
console.log(/\d/.test('1234'));
console.log(/\w/.test('abc')); */

/* function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Person('Lydia', 'Hallie');
// 在 JavaScript 中，函数是对象，因此，方法getFullName被添加到构造函数对象本身。
// 因此，我们可以调用Person.getFullName()，但member.getFullName会抛出TypeError。
// 如果您希望一个方法可用于所有对象实例，则必须将其添加到原型属性中：
Person.prototype.getFullName = () => this.firstName + this.lastName
console.log(member.getFullName()); */