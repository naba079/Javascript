// let myDate = new Date() // date is a object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

/*
Sat Sep 30 2023 13:06:02 GMT+0000 (Coordinated Universal Time)
Sat Sep 30 2023
9/30/2023, 1:06:02 PM
9/30/2023
*/

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());