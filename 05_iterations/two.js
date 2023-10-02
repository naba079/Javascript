const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item)=>{
//     // console.log(item);
//     return item // undefined
// })

// forEach never return value..

// ---------------
// const myNum = [1,2,3,4,5,6,7,8,9,10]
// // let result = myNum.filter( (num)=> num>5)
// let result = myNum.filter( (num)=>{
//     return (num>4);
// })

// const results = []
// myNum.forEach( (num)=>{
//     if(num>5){
//         results.push(num)
//     }
// })
// console.log(result);
// console.log(results);

/* ----------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre==="History")
console.log(userBooks);

// ----------------------
*/

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=> num+10)
// console.log(newNums);

// chaining
const newNums = myNumbers
                .map((num)=> num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
// console.log(newNums)

// ----------------------------------------
// Reduce : 
const myNum = [1,2,3]
// const myTotal = myNum.reduce(function (acc,curr) {
//     console.log(`${acc} and ${curr}`);
//     return acc+curr
// }, 0)

const myTotal = myNum.reduce( (acc,curr)=>acc+curr,0)
// console.log(myTotal)


const shoppingCart = [
    {
        item: "Js Course",
        price: 999
    },
    {
        item: "C++ Mastery",
        price: 9999
    },
    {
        item: "Blockchain Developer",
        price: 10999
    },
    {
        item: "Data Sciene",
        price: 12999
    }
]

const shoppingCost = shoppingCart.reduce( (acc,curr_item)=>acc+curr_item.price,0)
console.log(shoppingCost);