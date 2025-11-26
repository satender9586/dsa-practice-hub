// 1️⃣ Reverse a String Without Using .reverse()

function reverseString(str) {
  const temp = str.split("");
  let rev = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    rev += temp[i];
  }
  return rev;
}

console.log(reverseString("hello")); // hello -> olleh

// 2️⃣ Find the Maximum Number in an Array (Without Math.max)

function findMaximum(num) {
  let max = -Infinity;
  for (let i = 0; i < num.length - 1; i++) {
    if (max < num[i]) {
      max = num[i];
    }
  }
  return max;
}
console.log(findMaximum([10, 5, 22, 8, 15])); // -> 22

// 3️⃣ Count Frequency of Characters in a String

function countFrequency(str) {
  if (str.length < 0) return -1;
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }
  return obj;
}
console.log(countFrequency("banana")); // { b: 1, a: 3, n: 2 }

// 4 Merge Two Arrays Without Using concat()

function mergeArra(arr1, arr2) {
  let temp = [...arr1, ...arr2]; // type : 1

  let temp2 = arr1; // type2
  for (let i = 0; i < arr2.length; i++) {
    temp2.push(arr2[i]);
  }
  return temp2;
}
console.log(mergeArra([1, 2, 3], [4, 5])); // [1, 2, 3, 4, 5]

// 5️⃣ Convert Array of Objects → Array of Names

function converToArray() {
  const arr = [
    { name: "Amit", age: 25 },
    { name: "Riya", age: 21 },
    { name: "Raj", age: 30 },
  ];

  const nameArray = [];
  for (let i = 0; i < arr.length; i++) {
    let { name } = arr[i];
    nameArray.push(name);
  }
  return nameArray
}

console.log(converToArray()) // ["Amit", "Riya", "Raj"]