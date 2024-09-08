// Immediately Invoked Funciton Expressions (IIFE)

// named iife
(function chai() {
  console.log("DB Connected");
})();

((name) => {
  console.log(`DB Connected 2 ${name}`);
})("shivam");
