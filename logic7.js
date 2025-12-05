// 1️⃣ Find All Prime Numbers in an Array

function primeLogic(num) {
    if (num < 2) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

function findPrimeNumber(arr){
    let prime =[]
    for(let i=0;i<arr.length;i++){
        if(primeLogic(arr[i])){
            prime.push(arr[i])
        }
    }
    return prime

}

// console.log(findPrimeNumber([2,3,4,5,6,7]))

//2️⃣ Remove All Vowels From a String

function removeVowels(str){
    return str.replace(/[aeiouAEIOU]/g,"")
    
}
console.log(removeVowels("JavaScript is awesome"))


//  3️⃣ Count the Number of Words in a String

function coundNumber(str){
    let count =0;
    for(let i=0;i<str.split(" ").length;i++){
        count++
    }
    console.log(count)
}

coundNumber("I love JavaScript programming")


// 4️⃣ Merge Two Objects

function mergetObj(obj1, obj2){
    let newOjb = {...obj1, ...obj2}
    let newobj2 = Object.assign({}, obj1, obj2)
    console.log(newobj2)
}
mergetObj( {a:1, b:2}, {b:3, c:4})

// 5️⃣ Find the Second Largest Number in an Array

function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    console.log("Largest:", first);
    console.log("Second Largest:", second);
}

secondLargest([10,5,20,8,15]);

