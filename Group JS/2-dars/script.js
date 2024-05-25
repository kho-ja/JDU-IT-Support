"use strict";

// num = 5;

// console.log(num);

// ! Data Types

// * Primitives
// 1. Number
// 2. BigInt
// 3. String
// 4. Boolean
// 5. null
// 6. undefined
// 7. Symbol

//* Number
let number = 123;
console.log(typeof number, number);
number = 123.56;
console.log(typeof number, number);
number = NaN;
console.log(typeof number, number);
number = Infinity;
console.log(typeof number, number);
number = 0;
console.log(typeof number, number);

//* BigInt
let bigint = 212435189043758927345980322349592345903248n;
console.log(typeof bigint, bigint);
bigint = BigInt("32234567897654324567898765432456789");
console.log(typeof bigint, bigint);

//* String
let str = "Hello";
console.log(typeof str, str);
let str2 = "Single quotes are ok too";
console.log(typeof str2, str2);
let phrase = `can embed another ${str}`;
console.log(typeof phrase, phrase);

//* Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

//* null
let age = null;

//* undefined
let undef;
console.log(typeof undef, undef);

//* Symbol
let symbol = Symbol("symbol");
console.log(typeof symbol, symbol);
