// 1️⃣ Find the Missing Number in an Array (1 to N) 

function missingNumber(arr){
    let n = arr.length;
    let sum = Math.floor(((n+1)*n)/2)
    let arrsum = 0
    
    for(let i=0;i<n;i++){
        arrsum += arr[i]
    }
    console.log(sum-arrsum)
}

// missingNumber([0,1,2,4,5]) // 0,1,2,3,4,5

// 2️⃣ Reverse Only Vowels in a String

function reverseVowel(str){
  
}

// 3️⃣ Group Array of Objects by a Property (city)

function groupArray(arr){
    let group ={};
    for(let i=0;i<arr.length;i++){
        if(!group[arr[i].city]){
            group[arr[i].city]= []
        }
        group[arr[i].city].push(arr[i].name)
    }
    console.log(group)
}

// groupArray([
//   { name:"Amit", city:"Delhi" },
//   { name:"Riya", city:"Mumbai" },
//   { name:"Raj",  city:"Delhi" }
// ])


// 4️⃣ Find First Non-Repeating Character 

function findFirstNonRepeatedChar(str){
    let temp = {};
    for(let value of str){
        if(!temp[value]){
            temp[value]=0
        }
         temp[value]++
    }
    let finded = Object.keys(temp).find((item)=> temp[item]===1)
    console.log(finded)
}

// findFirstNonRepeatedChar("aabbcdde")




