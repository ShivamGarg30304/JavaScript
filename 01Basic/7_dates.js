let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let currDate = new Date(2023, 0);
let currDate = new Date("2023-12-01");
// console.log(currDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(currDate.getTime());

console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
  })
);
