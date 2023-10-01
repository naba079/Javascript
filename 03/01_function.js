function MyName(){
    console.log("Naba");
}
 
// MyName();


function twoSum(a,b){
    // console.log(a+b);
    return a+b
}

const result  = twoSum(2,3);
// console.log(result);

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

const ans = loginUserMessage()
// console.log(ans);

// ... = rest operator / spread operator
function calculateCartPrice(...num1){
    return num1
}
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// -->  val1 = 200, val2 = 400 only [600] will print then

// console.log(calculateCartPrice(200,400,600))

const user = {
    username: "naba",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200,400,600]
function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(myNewArray))