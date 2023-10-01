

// // Array methods
// const myArr = [0,1,2,3,4,5]
// // myArr.push(6);
// // console.log(myArr);

// // const newArr = myArr.join()
// // console.log(myArr);
// // console.log(newArr);
// // console.log(typeof newArr);

// // slice, splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr)

// const myn2 = myArr.splice(1,3)
// console.log(myn2); 
// console.log(myArr);
// /*
//     slice returns a piece of the array but it doesn't 
//     affect the original array. splice changes the original
//     array by removing, replacing, or adding values and 
//     returns the affected values.
// */

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// 2nd method
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

// 3rd method
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("naba"))
console.log(Array.from("naba"))
console.log(Array.from({name: "naba"})) // interview qn :)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
