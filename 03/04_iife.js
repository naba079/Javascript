// Immediately Invoked Function Expression - IIFE
// function that are immediately executed as they are initialized
    // 1. Database connection : as soon as application starts, File database connection start 
    // 2. Global Scope  - We dont want any polution in child scope

    // -->Normal
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

    // ---> IIFE
(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

// ()(); // first one for func definition
        // second one for func execution
       // remember to add semicolon

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('naba')
