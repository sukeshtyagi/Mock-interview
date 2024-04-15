const str = "hi i m coder";

const arry = str.split(" ");

//console.log(arry)

const capitalArray = arry.map((word) => {
  return word[0].toUpperCase();
});

console.log(capitalArray);

const sub = arry.map((word) => {
  const st = word.substring(1);
  return st;
});
console.log(sub);

let word1 = capitalArray[0] + sub[0];
let word2 = capitalArray[1] + sub[1];
let word3 = capitalArray[2] + sub[2];
let word4 = capitalArray[3] + sub[3];

const final = [word1, word2, word3, word4].join(" ");
console.log(final)