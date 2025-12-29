// 1 Write a function that takes an array of integers and returns the first number that appears more than once.

function firstRepeatedNumber(arr){
    
    const obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=0
        }
        return arr[i]

    }
    return -1

}
// console.log(firstRepeatedNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]))

function repeateWithSet(arr){
    let see = new Set();
    for(let value of arr){
        if(see.has(value)){
            return value;
        }else{
            see.add(value)
        }
    }
    return -1

}
console.log(repeateWithSet([2, 5, 1, 2, 3, 5, 1, 2, 4]))

