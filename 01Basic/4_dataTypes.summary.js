// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 3424567654567654544454545454845851n;
console.log(typeof bigNumber);

// Non -Primitive or Refrenced Type

// Arrays, Objects, Functions

const heros = ["shaktiman", "doga", "naagraj"];

const person = {
  name: "shivam",
  age: 20,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof myFunction);

// *************************************************************

// Stack(Primitive) Copy is passed, Heap(Non - Primitive) refrence is passed
