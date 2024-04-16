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

async function foo() {
  return "hello world";
}
const result = foo();
result.then((res) => console.log(res));

//resolve a promise by retrunign a vale and
//reject it by throwing an error
//pending by returnina  a new promsie

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
