
// ****************************** conftion
console.log(typeof fn, fn); // funcitons, number
function fn(){ return 10; }
var fn = 20;
console.log(typeof fn, fn); // funcitons, number

console.log(({ [Symbol.toPrimitive](h){ return h === "number" ? "12" : "4"; } }) + 1); // Q21
console.log(({ [Symbol.toPrimitive](h){ return h === "number" ? "12" : "4"; } }) * 2); // Q22

console.log(-"-4" + 5); 

console.log(+"xyz" + 1);  

// 2️⃣ Reverse Only Vowels in a String

// 5️⃣ Rotate an Array by K Steps

// 1️⃣ Find the Longest Consecutive Sequence in an Array

// Example:

// Input:  [100, 4, 200, 1, 3, 2]
// Output: 4   (sequence is 1,2,3,4)