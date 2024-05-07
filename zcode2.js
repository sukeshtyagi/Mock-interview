const str = "hello world";
const ary = str.split(" ");
console.log(ary);

const word1 = ary[0];
const word2 = ary[1];
const ary11 = str.split("").reverse().join("");
console.log(ary11);
const ary1 = word1.split("").reverse().join("");
const ary2 = word2.split("").reverse().join("");

let res = ary1 + " " + ary2;
console.log(typeof res);
