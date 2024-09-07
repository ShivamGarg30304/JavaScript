// singleton

// object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Shivam",
  "fullName": "Shivam Garg",
  [mySym]: "key1",
  age: 20,
  location: "Ghaziabad",
  email: "shivamgarg30304@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser);
console.log(JsUser["email"]);
console.log(JsUser.email);
console.log(JsUser.fullName);
console.log(JsUser[mySym]);

JsUser.email = "shivam@gmail.com";
console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser.email = "shivam1234@gmail.com";
console.log(JsUser.email);

JsUser.greeting = function () {
  console.log(`Hello ${this.fullName}`);
};

console.log(JsUser);
JsUser.greeting();
console.log(JsUser.greeting);
