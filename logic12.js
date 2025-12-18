// Practical 1 — Remove duplicate values

function removeDuplicate(arr){
    // let obj = {};
    // for(let i=0;i<arr.length;i++){
    //     if(!obj[arr[i]]){
    //         obj[arr[i]]=true
    //     }
    // }
    // console.log(Object.keys(obj))--------------- Way 1-------------

    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }
    }
    console.log(arr1) //---------------------------Second way---------------


}
// removeDuplicate([1,2,3,2,4,1])


// Practical 2 — Find first non-repeating character

function firstNonRepeated(str){
    let obj = {};
    for(let value of str){
        if(!obj[value]){
            obj[value]=0
        }
        obj[value]++
    }
    let find = Object.keys(obj).find((item)=> obj[item]==1)
    console.log(find)
}

firstNonRepeated("javascript")