// Primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


// Reference ( Non Primitive)
// Array, Objects, Functions 


/* MEMORY
1. Stack ( Primitive )
2. Heap  ( Non-Primitive )

*/


// stack - primitive:
let myName = "naba"
let nickname = myName // nickname take a copy not original myName value
nickname = "nab"; // that's why when you change value it'll show in nickname 
// not in the original "myName"

console.log(myName);
console.log(nickname);


// Heap - Non-primitive
// here useTwo will not copy userOne data, it'll directly point 
// to userOne data
// so when you change it, it'll show for both updataed value
let userOne = {
    email: "user@gmail.com",
    password: "user@1234"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);