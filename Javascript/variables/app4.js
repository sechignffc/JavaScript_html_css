// array
const myArr = ["strings", 100, true];
console.log(myArr);
console.log(myArr[1]); // index starts at 0, this returns 100

myArr[1] = 200;
console.log(myArr[1]);

console.log(typeof myArr); // returns object

// object
const myObj = {
  first: "string",
  val: 100,
  boo: true,
};

console.log(myObj);
console.log(myObj.val); // dot notation
console.log(myObj["boo"]); // bracket notation

// arrays and objects in objects

const myName = {
  first: "Giovanni",
  last: "Sechi",
  arr: [1, 2, 3, 4],
  myObj: {
    one: "one",
    two: "two",
  },
};

console.log(myName.myObj.one);
console.log(myName["myObj"]["two"]);

// how arrays affect each other
const myArr2 = myArr;
myArr2[2] = "wow";
console.log(myArr); // will output array with 'wow' as both arrays change
console.log(myArr2);
