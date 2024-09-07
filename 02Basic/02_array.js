let a = [1, 2, 3];
let b = [4, 5, 6];

// a.push(b);

let c = a.concat(b);

let allNumbers = [...a, ...b];
// console.log(allNumbers);
// console.log(c);

console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"));
console.log(Array.from({ name: "shivam" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
