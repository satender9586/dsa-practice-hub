// 1️⃣ Flatten Nested Array (1 Level Only)


function flatArray(arr){
    let flat = arr.flat(Infinity)
    return flat
}

// console.log(flatArray([1, [2,3], 4, [5]]))

// 3️⃣ Count How Many Times Each Item Appears in Array

function count(arr){
    let obj = {};
    for(let value of arr){
        if(!obj[value]){
            obj[value]=1
        }
        obj[value]++
    }
    return obj
}

// console.log(count(["apple","banana","apple","orange","banana"]))

// 2️⃣ Find the Longest Word in a Sentence

function findLargestWord(str){
    let splitString = str.split(" ")
    let largest = "";
    for(let value of splitString){
        if(largest.length < value.length){
            largest = value
        }
    }
    return largest
}

// console.log(findLargestWord("JavaScript is awesome"))

// 4️⃣ Convert Object → Array of Key-Value Pairs

function objectArray(obj){
    let arr = [];
    for(let key in obj){
        arr.push([key, obj[key]])
    }
    return arr
}

// console.log(objectArray({ name: "Amit", age: 25 }))

// 5️⃣ Reverse Words in a String (Not characters)

function reveseWord(str){
    let rev = str.split(" ").reverse()
    return rev.join(" ")
}
console.log(reveseWord("I love JavaScript"))