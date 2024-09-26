const user = {
  userName: "shivam",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to the website`);
    console.log(this);
  },
};
// console.log(userName);

// user.welcomeMessage();
// user.userName = "saloni";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let userName = "shivam";
//   console.log(this);
//   //   console.log(this.userName);
// }

// const chai = function () {
//   let userName = "shivam";
//   console.log(this.userName);
// };

// const chai = () => {
//   let userName = "shivam";
//   console.log(this.userName);
// };

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// implicit arrow function
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ({ userName: "shivam" });
// console.log(addTwo(5, 4));
// console.log(addTwo(3, 4));

// const myArray = [2, 3, 4, 5, 6];
// myArray.forEach();
