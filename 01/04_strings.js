const name = "naba"
const repoCount = 50

// console.log(name + repoCount + " value");
// String interpolation
console.log(`Hello my name is ${name} and repoCount is ${repoCount}`);

const gameName = new String('naba'); // another way to declare it
console.log(gameName.toUpperCase());
console.log(gameName);

const newString = gameName.substring(0,4)
console.log(newString);


const url = "https://abc.com/abc%20xyz"
console.log(url.replace('%20','_'));