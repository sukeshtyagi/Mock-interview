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

function foo(){
  console.log(this.name)
}

foo({name:"john"})