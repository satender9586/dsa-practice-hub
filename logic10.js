// 1️⃣ Convert a String Into an Object of Word Frequencies

function stringFrequencies(str){
    const obj = {};
    let strSplit = str.split(" ");
    for(let value of strSplit){
        if(!obj[value]){
            obj[value]=0
        }
         obj[value]++
    }
    console.log(obj)
}
// stringFrequencies("I love coding and I love JavaScript")

// 2️⃣ Convert Array of Objects Into Object Grouped by First Letter of Name

function groupByFirstLetter(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i].name[0]]){
            obj[arr[i].name[0]]=[]
        }
        obj[arr[i].name[0]].push(arr[i].name)
    }
    console.log(obj)
}

// groupByFirstLetter([
//   {name:"Amit"},
//   {name:"Anu"},
//   {name:"Riya"},
//   {name:"Rohan"}
// ]
// )

// 3 Find the Longest Word Length in a Sentence

function findLargestWordLength(str){
    let temp = str.split(" ");
    let max = "";
    for(let value of temp){
        if(max.length<value.length){
            max = value
        }
    }
    console.log(max)
}

// findLargestWordLength("JavaScript makes coding fun JavaScriptt")

// 4 Remove All Numbers From a String

function removeNumberToString(str){
    let temp = ""
    for(let value of str){
                if(isNaN(value)){
            temp +=value
        }
    }
    console.log(temp)   
}

removeNumberToString("a1b2c3d4")