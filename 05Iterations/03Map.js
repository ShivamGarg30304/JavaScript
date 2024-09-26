const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.map((num) => num ** 2);
// const newNum = myNums.map((num) => {
//   return num ** 2;
// });

const newNum = myNums
  .map((num) => num * num)
  .map((num) => num * num)
  .filter((num) => num % 2 === 0);

console.log(newNum);
