// singleton - contruction se banega toh singleton hoga
// Object.create

// Symbol
const mySym = Symbol("key1");

// Object literals
const JsUser = {
    name: "naba",
    // mySym: "myKey1", // to refer symbom u need to use like this
    // [mySym]
    [mySym]: "myKey1",
    age: 20,
    location: "Mumbai",
    email: "naba@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// Access
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
