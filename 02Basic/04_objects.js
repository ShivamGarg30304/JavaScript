// const tinderUser = new Object(); // singelton
const tinderUser = {}; // non -singelton

tinderUser.id = "123abc";
tinderUser.name = "Shivam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmial.com",
  fullName: {
    userFullName: {
      firstName: "shivam",
      lastName: "garg",
    },
  },
};

// console.log(regularUser.fullName.userFullName);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 3: "f" };

// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign(obj1, obj2);

obj3[2] = "ff";
// console.log(obj3);
// console.log(obj1);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseName, price, courseInstructor: instructor } = course;

console.log(instructor);
