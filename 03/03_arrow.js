// this used for current context
const user = {
    username: "naba",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     console.log(this)
// }

// chai();


// const chai = function(){
//     let username = "naba"
//     console.log(this.username)
// }

const chai = () => {
    let username = "naba"
    console.log(this.username)
}
chai()

// arrow function 

// () => {
// }

// Explicit Returns
// const addTwo = (a,b) =>{
//     return a+b;
// }

// Implicit Returns
// const addTwo = (a,b) => a+b;
// const addTwo = (a,b) => (a+b);
const addTwo = (a,b) =>( {
    username: "naba"
})

console.log(addTwo(3,4));

