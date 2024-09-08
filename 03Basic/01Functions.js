function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("M");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(2, 3);

function loginUserMessage(userName) {
  return `${userName} just logged in`;
}

function calculateCartPrice(...num1) {
  //   console.log(num1);
  return num1;
}

console.log(calculateCartPrice(200, 300, 400));

const user = {
  userName: "shivam",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

handleObject(user);
