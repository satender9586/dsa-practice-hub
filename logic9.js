//  1 Capitalize the First and Last Letter of Each Word


function chapitalFirstChar(Str){
    let chapital = Str.split(" ").map((item)=> item[0].toUpperCase()+item.slice(1)).join(" ")
    console.log(chapital)
}

// chapitalFirstChar("javascript is fun")

// 2 Count How Many Users Are From Each City

function countUserByCity(arr){
    const obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i].city]){
            obj[arr[i].city]=0
        }
        obj[arr[i].city] = obj[arr[i].city]+1
    }
    console.log(obj)
}

countUserByCity([
  {name:"Amit", city:"Delhi"},
  {name:"Riya", city:"Mumbai"},
  {name:"Raj",  city:"Delhi"},
  {name:"Sam",  city:"Mumbai"}
])

// 3 Find the Difference Between Two Arrays

function findDiffrence(arr1, arr2){
    let unique = new Set(arr1,arr2)
    console.log(unique)
  
}

findDiffrence([1,2,3,4], [3,4,5,6])

// 4 Remove Duplicate Characters but Keep First Occurrence

function removeDuplicate(str){
    let temp = [...new Set(str)].join("")
    console.log(temp)
}
removeDuplicate("banana")