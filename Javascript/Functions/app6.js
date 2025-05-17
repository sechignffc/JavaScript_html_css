// in javascript you can run functions before you declare them if you use function myFun() {}
// if you use const, you must declare it first

const myFun1 = function () {
  //console.log("Fun 1");
  return "1";
};

const val1 = myFun1();
//console.log(val1);

// you can immedfiately invoke a fucntion adding () after the {}. if you run myFun3(); it doesn't return anything without a return
const myFun3 = (function () {
  //console.log("Fun 3");
  return "3";
})();

// this errors: myFun3();
//console.log(myFun3); // returns '3' as function has been invoked, No need for ()

// run before declaration
//console.log(myFun2());
const val4 = myFun2();
//console.log(val4); // returns 2

function myFun2() {
  //console.log("Fun 2");
  return "2";
}

// parameters
let val = adder(5, 10);
console.log(val);
console.log(adder(7, 80));

function adder(a, b) {
  //let val = a + b;
  //return val;
  return a + b;
}

let test = "5 + 10 = " + adder(5, 10);
console.log(test);

let a = 7;
let b = 9;

let test2 = a + " + " + b + " = " + adder(a, b);
console.log(test2);
