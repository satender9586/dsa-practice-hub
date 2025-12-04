// 1️⃣ Find Intersection of Two Arrays

function findCommon(arr1, arr2){
    let common = []

    // for(let i=0;i<arr1.length;i++){  // approch : 1
    //     if(arr2.includes(arr1[i])){
    //         common.push(arr1[i])
    //     }
    // }

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                common.push(arr1[i])
            }
        }
    }
    console.log(common)
}
// findCommon([1,2,3,4], [3,4,5,6])

// 2️⃣ Remove All Occurrences of a Value From Array


function removeOccurrences(arr){
   let obj = {};
   for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=true
        }
   }
   console.log(Object.keys(obj))

}
// removeOccurrences([1,2,3,2,4])

// 3️⃣ Convert a String to Title Case

function titleCase(str){
    let title = str.split(" ").map((char)=> char[0].toUpperCase()+char.slice(1)).join(" ")
    console.log(title)
}
titleCase("hello world from javascript")

// 4️⃣ Sort Array of Objects by a Key (Age)

function shortByAge(arr){
    let sort = arr.sort((a, b) =>  b.age - a.age);
    console.log(sort)
}

shortByAge([
  {name:"Amit", age:25},
  {name:"Riya", age:20},
  {name:"Sam",  age:30}
])

// 5️⃣ Check if a String is Palindrome (Ignore Case & Spaces)

function checkPalindro(str){
    let freshStr = str.replaceAll(" ","").toLowerCase().split("").reverse().join("")
    
    if(freshStr==str.replaceAll(" ","").toLowerCase()){
        return true
    }
    return false

}
console.log(checkPalindro("A man a plan a canal Panama"))