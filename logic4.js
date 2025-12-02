// 1️⃣ Find Unique Elements From an Array
// Input:  [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]

function findUnique(arr) {
  // let uniqu = new Set(arr) // 1 way
  // return uniqu
  // let obj = {};  // 2 way
  // for(let i=0;i<arr.length;i++){
  //     if(!obj[arr[i]]){
  //         obj[arr[i]] = arr[i]
  //     }
  // }
  // return Object.keys(obj)
}

// console.log(findUnique([1,2,2,3,4,4,5,10,10]))
/// 3️⃣ Convert Array of Objects → One Object Grouped by Key

function objectGroup(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].city]) {
      obj[arr[i].city] = [];
    }
    obj[arr[i].city].push(arr[i].name);
  }
  console.log(obj);
}
// objectGroup([
//   { name: "Amit", city: "Delhi" },
//   { name: "Raj", city: "Mumbai" },
//   { name: "Rahul", city: "Delhi" },
// ]);


// remove duplicate string

function removeDuplicateString(str){
    let unique = []
    let split = str.split(" ")
    for(let i=0;i<split.length;i++){
        if(!unique.includes(split[i])){
            unique.push(split[i])
        }
    }
console.log(unique.join(" "))
}

// removeDuplicateString("hello world hello JavaScript world")

//4 Merge Two Arrays and Remove All Duplicate Objects

function mergeObj(arr1, arr2) {
    let arr = [...arr1, ...arr2];

    let map = new Map();

    for (let obj of arr) {
        map.set(obj.id, obj);   
    }

   return [...map.values()];
}

console.log(mergeObj([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }]));
