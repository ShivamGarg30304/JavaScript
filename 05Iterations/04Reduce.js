const myNums = [1, 2, "3", 4, 5];

// const number = myNums.reduce((prev, curr) => prev * curr);
// if the initial value is not provided then the initial value taken as the first element of the array
const number = myNums.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
}, 0);

console.log(number);
