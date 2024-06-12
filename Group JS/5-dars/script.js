// Comparison operators
//? Number comparison
// console.log(2 > 2);
// console.log(2 < 2);
// console.log(2 == 2);
// console.log(2 != 2);
// console.log(2 <= 2);
// console.log(2 >= 2);

//? String comparison
// console.log("A" > "Z");
// console.log("Glow" > "Glee");
// console.log("Bee" > "Be"); // true

//? Comparison of different types
// console.log("2" > 1); // true, string "2" becomes a number 2
// console.log("01" == 1); // true, string "01" becomes a number 1

// console.log(true == 1); // true
// console.log(false == 0); // true

//? Strict equality
// console.log(0 == false); // true
// console.log(0 === false); // false, because they are of a different type

//? Comparison with null and undefined
// console.log(null == undefined); // true
// console.log(null === undefined); // false

//? Strange result: null vs 0
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

//? an incomparable undefined
// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

//? if else
// let year = prompt(
//   "In which year was ECMAScript-2015 specification published?",
//   ""
// );

// if (year == 2015) {
//   alert("You are right!");
// } else if (year < 2015) {
//   alert("Too early");
// } else {
//   alert("You are wrong!");
// }

//? conditional operator '?'
let age = prompt("How old are you?", "");
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);
