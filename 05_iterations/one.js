// // // For
// // for (let index = 0; index < 10; index++) {
// //     const element = index;
// //     console.log(element);
// // }


// // let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// for of loop
// [{},{},{}] - obj in arr
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greet = "hello world"
for (const i of greet){
    // console.log(i)
}

// Maps 
const map = new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('FR',"France")

// console.log(map)
// for (const [key,Value] of map) {
//     console.log(key);
//     // console.log(key,":- ", Value)
// }

for (const key in map) {
    console.log(key);
}

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key,Value] of myObject) {
    // console.log(key,": ", Value) 
    //TypeError: myObject is not iterable
// }


// ---> for__of loop works in map



const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`);
// }


const code = ["js","rb","py","java","c++"]
for (const key in code) {
    // console.log(key);
    // console.log(code[key]);
}




// For Each
const coding = ["js","rb","py","java","c++"]
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


const myCoding = [
    {
        language: "javascript",
        file: "js"
    },
    {
        language: "C++",
        file: "cpp"
    },
    {
        language: "Python",
        file: "py"
    }
]
myCoding.forEach( (item)=>{
    console.log(item.language);
})