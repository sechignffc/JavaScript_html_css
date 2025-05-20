// immediately invoked arrow function

((a) => console.log(a))("Hello World");

let val = "test";

// normal function
const test1 = function (a, b, c) {
  return a + b + c;
};

// arrow function
const test2 = (a, b, c) => {
  return a + b + c;
};

// simplified arrow function
const test3 = (a, b, c) => a + b + c;

// simplified single parameter arrow function
const test4 = (a) => a + 20 + 20;

// default parameters
const test5 = (a, b = 20, c = 10) => a + b + c;

val = test1(5, 10, 15);
val = test2(5, 10, 15);
val = test3(5, 10, 15);
val = test4(5);
val = test5(5);
const myObj = {
  a: 5,
  b: () => console.log("Hello"),
  c: () => console.log(this),
};

myObj.b();
myObj.c();

// click event listener example

const output = document.querySelector(".output");
output.addEventListener("click", (e) => {
  console.log("clicked");
});
output.addEventListener("click", function (e) {
  console.log("click 2");
});

console.log(val);
output.innerHTML = val;

// array methods

console.clear();
const arr = [1, 2, 3, 4, 5];
const temp = arr.reduce((a, b) => a + b);
console.log(temp);

const temp1 = arr.filter((a) => a > 2);
console.log(temp1);

const temp2 = arr.map((a) => a * 2);
console.log(temp2);
