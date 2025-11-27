// 1️⃣ Find the Second Smallest Number in an Array

function findSecondSmallestNumber(arr) {
    let first = Infinity;
    let second = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (first > arr[i]) {
            second = first;
            first = arr[i]
        } else if (second > arr[i] && second < first) {
            second = arr[i]
        }
    }
    return second
}
console.log(findSecondSmallestNumber([5, 2, 5, 3, 2, 1, 4, 1, 9, 1, 7])) // 2


// 2️⃣ Remove All Spaces From a String

function removeSpaces(str) {
    // return str.split(" ").join("")
    return str.replaceAll(" ", "")

}
console.log(removeSpaces("I love JavaScript")) // IloveJavaScript


// 3️⃣ Convert Object → Array of Key-Value Pairs

function convetToKeypair(obj) {
    const arr = [];
    for (let value in obj) {
        arr.push([value, obj[value]])
    }
    return arr
}
console.log(convetToKeypair({ name: "Amit", age: 25 })) //  [["name", "Amit"], ["age", 25]]

// 4️⃣ Filter Objects Where Age > 25

function filterOjb() {
    const arr = [
        { name: "Amit", age: 22 },
        { name: "Riya", age: 28 },
        { name: "Raj", age: 30 }
    ]

    return arr.filter(({name, age})=> age>25)

}
console.log(filterOjb())

// 5️⃣ Reverse an Array Without Using reverse()

function reverArray(arr){
    let p1=0;
    let p2 = arr.length-1;
    let n=Math.floor(arr.length)/2
    
    for(let i=0;i<n;i++){
        let temp = arr[p1];
        arr[p1]=arr[p2];
        arr[p2] = temp;
        p1++;
        p2--
       
    }
    return arr 

}

console.log(reverArray([1, 2, 3, 4]))