var c = 300;
let a = 300;
{
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("Inner : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "shivam";
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  //   console.log(website);
  console.log("hello");

  two();
}

// one();

if (true) {
  const userName = "shivam";
  if (userName === "shivam") {
    const website = " youtube";
    // console.log(userName + website);
  }
  //   console.log(website);
}

// console.log(userName);

// *************************intersting **********

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
