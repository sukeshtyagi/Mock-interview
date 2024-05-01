/*function foo() {
  console.log((x))
   x=10
}

foo()

console.log(typeof(x))*/

/*
foo();
var foo = 20;

function foo() {
  console.log("calling foo");
}

foo();
*/

/*
for (let index =1; index <3; index++) {
  setTimeout(() => {
    console.log(index)
  }, 1000);
  
}
*/

//resolve a promise by retrunign a vale and
//reject it by throwing an error
//pending by returnina  a new promsie

/*
async function foo() {
  return "hello world";
}
const result = foo();
result.then((res) => console.log(res));



async function foo() {
  throw new Error("hello");
}
const res = foo();
console.log(res);

async function foo() {
  return new Promise(() => {});
}
const res1 = foo();
console.log(res1)
*/

/*
const user1={
  name:"john"
}

const user2={
  name:"john"
}

user2.name="ramesh"

console.log(user1)
console.log(user2)
*/

/*
function abc() {
  console.log("abc")
}
const value=new abc()
console.log(value)
*/

/*
console.log(a);
console.log(b);
var a=b=5
*/

/*
function foo(){
  console.log(this.name)
}

foo({name:"john"})
*/

/*
const foo = () => {
  console.log(this.name);
  const bar = () => {
    console.log(this.name);
  };
  bar();
};
foo();
*/

/*
function abc() {
  let a = 1;
  let b = 2;
   c = 3;
  console.log(c);
  console.log(b);
  console.log(a);
}
abc()
console.log(0123)
*/

/*
foo()
var foo=20
function foo() {
  console.log('calling foo')
}
foo()
*/

/*
const abc={
  "user-name":10
}
console.log(abc)
*/
/*
let a = null;
console.log(typeof a);
console.log(typeof undefined);
*/

/*
console.log([1,2]==[1,2])

const numbers=[0,1,2,3,4,5]
numbers.push(6)
console.log(numbers)

numbers.unshift([1,2,3,])
console.log(numbers)

numbers.shift()
console.log(numbers)
*/

/*{
  let a = 1;
  let b = 2;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);
*/

/*
const arr=[1,2,3]
arr[4]=5
console.log(arr[30])
let a=arr.indexOf(3)
console.log(a)
*/

/*
var a = 10;
function foo() {
  console.log(a);
  var a = 5;
}
foo();

const arr = [1, 2, 3, 4];
const abc = [...arr];

console.log(abc);
*/

//counter app

/*const addBtn = document.getElementById("add");
addBtn.onclick = increase;

const substract = document.getElementById("substract");
substract.onclick = decrease;

function increase() {
  const countEl = document.getElementById("count");
  let count = parseInt(countEl.innerText);
  console.log(count);

  count = count + 1;
  console.log(count);

  countEl.innerHTML = count;
  console.log(countEl);
}

function decrease() {
  const countEl = document.getElementById("count");
  let count = parseInt(countEl.innerText);
  console.log(count);

  if (count > 0) {
    count = count - 1;
    console.log(count);

    countEl.innerHTML = count;
    console.log(countEl);
  }
}
*/

/*
const parent = document.getElementById("parent");
const child = document.getElementById("child");
parent.style.backgroundColor = "green";
child.style.backgroundColor = " red";
console.log(parent);
console.log(child);

parent.addEventListener(
  "click",
  () => {
    console.log("prent clicked");
  },
  true
);

child.addEventListener("click", () => {
  console.log("child clicked");
});
*/
/*
function abc() {
  a = 1;
  b = 2;
  console.log(a);
  console.log(b);
}
abc();

console.log(a);
console.log(b);
*/
/*
function arry() {
  const num = [0,10, 20, 30, 40, 50];
  return num.filter((item) => {
    return item < 30;
  });
}

let result = arry();
console.log(result);
*/

//ladder function
/*
function start() {
  let el = document.getElementById("count");
  let btn = document.getElementById("btn");
  let ascending = true;

  btn.addEventListener("click", () => {
    let value = parseInt(el.innerHTML);
    if (ascending && value < 12 && value >= 0) {
      value = value + 1;
      el.innerHTML = value;
      console.log(value);

      if (value === 11) {
        ascending = false;
      }
      console.log(el);
    }

    if (ascending === false ) {
      console.log("deceding will hapen");
      console.log(value)
      value=value-1
      el.innerHTML=value
    }
    if (value===0) {
      ascending=true
      console.log("ase wil hapen")
    }
  });
}
start();
*/
/*
console.log(a);
function a() {
  console.log("abc");
}
*/

/*
console.log(typeof hello);

function foo() {
  return "hello";
}
const res = foo();
console.log(res);
*/
/*
var ary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = ary.filter((item) => {
  return item > 0 && item % 2 === 0;
});
console.log(res);

let res1 = ary.filter((item) => item < 5);
console.log(res1);

let res2 = ary.map((item) => item + "");
console.log(res2);

let res3 = res2.map((item) => {
  return { a: item };
});
console.log(res3);
*/
/*
const btn = document.getElementById("btn");
btn.onclick = start;

function start() {
  const el = document.getElementById("count");
  let count = 0;
  console.log(count);

  if (count === 0) {
    let interval = setInterval(() => {
      count = count + 1;
      el.innerHTML = count;
      console.log(count);

      if (count === 10) {
        console.log("count===10");

        clearInterval(interval);
      }
    }, 1000);
  } else if (count === 10) {
    let count1 = 10;
    let interval1 = setInterval(() => {
      el.innerHTML = count1;
      count1 = count1 - 1;
      console.log(count1);

      if (count1 === 0) {
        console.log("count===10");
        clearInterval(interval1);
      }
    }, 1000);
  }
}
*/

var a = { num: 1 };
var b = a;
console.log(a, b);

a = { c: 3 };

console.log(a, b);
