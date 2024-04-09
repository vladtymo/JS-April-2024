// ------------- console ---------------
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// ------------- data types -------------
// let <name> = <value>;

// naming style: lowerPascalCase
let userEmail = 'vlad@softserveinc.com'; // string
let totalPrice = 3450;                   // number
let notANumber = NaN;                    // number
let res = Infinity;                      // number

let koef = 2.7;                          // number
let str = "Hello";                       // string

let isValid = true;                      // boolean

let coord = { x: 4, y: -1, z: null };    // object
let arr = [4, 6, 2, 7, -3, 40];          // object

let empty = null;                        // null (object)

let undef = undefined;                   // undefined (bad practice)
let blabla;                              // undefined (bad practice)

// console.log(coord.z); // null
// console.log(coord.j); // undefined

console.log(typeof (userEmail));
console.log(typeof (totalPrice));
console.log(typeof (koef));
console.log(typeof (str));
console.log(typeof (isValid));
console.log(typeof (coord));
console.log(typeof (arr));
console.log(typeof (empty));
console.log(typeof (undef));

// JS has weak/dynamic/duck typing
totalPrice = "40.5$";   // change type from [number] to [string] (bad practice)
totalPrice = null;      // good
console.log(totalPrice);

// ----- constants
const secondsInMinute = 60;
// secondsInMinute = 69; // error

const user = { id: 1, name: "Igor" }
//user = {};        // error
user.id = 2;        // good

// change value
totalPrice = 3100;

// ------------ browser dialogs ------------
alert("Hello client from alert!");

const username = prompt("Enter your name:");

// string concatenation: str + str
console.log("Hello, " + username + "!");
// string interpolation: `${str}${str}`
console.log(`Hello, ${username.toUpperCase()}!`);

// TASK: ask user for current year and show next one

// convert string to number: Number(str) +str
const year = +prompt("What is current year?");

if (isNaN(year)) {
    console.warn("Invalid number format!");
}
else {
    console.log(`Year: ${year}`);
    console.log(`Next year: ${year + 1}`); // number + number = number
    console.log(`Prev year: ${year - 1}`); // number - number = number
}
