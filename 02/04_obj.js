const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name = "naba"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "naba",
            middlename: "Kumar",
            lastname: "sit"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "naba@gmail.com"
    },
    {
        id: 2,
        email: "nab12@gmail.com"
    },
    {
        id: 3,
        email: "naba@google.com"
    }
]


users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// all keys are stored in a array 
// nd you can access them using a loop :)



