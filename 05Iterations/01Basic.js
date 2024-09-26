// for loop

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// for-of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//   console.log(element);
// }

// for (const element of "hello world!") {
//   console.log(element);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// }

const myObj = {
  name: "shivam garg",
  mobNo: "9719530304",
  email: "shivamgarg30304@gmail.com",
};

// This will not work
// for (const element of myObj) {
//   console.log(element);
// }

// For-in loop

// for (const key in myObj) {
//   console.log(`${key} => ${myObj[key]}`);
// }

// for (const key in arr) {
//   console.log(arr[key]);
// }

// we cannot do this as map is not iterable
// for (const key in map) {
//   console.log(key);
// }

// for-each loop

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// // coding.forEach((item) => printMe(item));
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "C++",
    extension: "cpp",
  },
  {
    languageName: "Python",
    extension: "py",
  },
  {
    languageName: "JavaScript",
    extension: "js",
  },
];

myCoding.forEach(({ languageName, extension }) => {
  console.log(languageName, extension);
});
