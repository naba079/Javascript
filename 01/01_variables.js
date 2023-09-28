const accountId = 13344
let accountEmail = "naba23@gmail.com"
var accountPassword = "12345"
accountCity = "Navi Mumbai"
let accountState;
// If any variable is not defined then it will show as Undefined

// accountId = 2 // not allowed
accountEmail =  "nabk@gmail.com"
accountPassword = "34333"
accountCity = "Banglore"

console.log(accountId);
/*
    Prefer not to use  var 
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])