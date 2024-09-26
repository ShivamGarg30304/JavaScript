// const userEmail = "shivam@gmail.com";

// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Do not get that");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function() {}

// emptyArr = [];

// if (emptyArr.length === 0) {
//     console.log("Array is empty");
// } else {
//     console.log("Not empty");
// }

// myObj = {};

// if (Object.keys(myObj).length === 0) {
//     console.log("Empty Object");
// } else {
//     console.log("Not empty object");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = 5 ?? null;
// val1 = null ?? 10;
val1 = undefined ?? 10;

val1 = null ?? 4 ?? 10;

console.log(val1);
