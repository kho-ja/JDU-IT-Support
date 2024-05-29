// alert("hello");
// let input = prompt("ismingizni kiriting", "Anvar");
// console.log(input);

// let age = prompt("How old are you?", 100);
// alert(`You are ${age} years old!`); // You are 100 years old!

// result = confirm("Siz odamisiz?");
// console.log(result);

// * To String()
let value = true;
console.log(typeof value, value); // boolean0

value = String(value); // now value is a string "true"
console.log(typeof value, value); // string

//* To Number(), BigInt()
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

console.log("6" / "2"); // 3, strings are converted to numbers
console.log(Number(undefined), undefined);
console.log(Number(null), null);

//* To Boolean()
console.log(Boolean(1), 1); // true
console.log(Boolean(0), 0); // false

console.log(Boolean("hello"), "Hello"); // true
console.log(Boolean(""), ""); // false

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
