// 1️⃣ Check if Two Strings Are Anagrams

function checkAnagram(str){

    let purify = str.toLowerCase().replaceAll(" ","")
    let temp = str.toLowerCase().replaceAll(" ","").split("").reverse().join("")


    if(temp==purify){
        return true
    }else{
        return false
    }
}
console.log(checkAnagram("mam")) //"listen", "silent" - > false


// 2️⃣ Find the Sum of All Even Numbers in Array

function findSumEven(arr){
    let sumOfEven = 0;
    for(let value of arr){
        if(value%2==0){
            sumOfEven +=value
        }
    }
    return sumOfEven
}

console.log(findSumEven([1,2,3,4,5,6])) // 12

// 3️⃣ Convert Array → Object Using Index as Key

function convetToObj(arr){
    let obj = {}
    for(let index in arr){
        obj[index]=arr[index]
    }
    return obj
}

console.log(convetToObj(["a", "b", "c"])) // {0: 'a', 1: 'b', 2: 'c'}

// 4️⃣ Remove All Falsy Values From Array

function removeFalsy(arr){
    let newarr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            newarr.push(arr[i])
        }
    }
    return newarr
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null])) // [1, 2, 3]


// 5 Check if Object is Empty (Without Object.keys)

function checkObjEmpty(obj){
    for( let key in obj){
        return false
    }
    return true
}

console.log(checkObjEmpty({name:"amit"}))