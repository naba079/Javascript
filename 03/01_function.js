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
console.log(ans);