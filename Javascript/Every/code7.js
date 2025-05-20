const arr1 = [1, 4, 54, 23, 5, 7, 34, 66];
const arr2 = ["Giovanni", "a", "world", "He"];
const arr3 = ["Giovanni", "Sechi", "cat", "hello", "a", "world"];

// check very item in an array until a condition is met
let val = arr1.every((ele) => {
  console.log(ele);
  return ele < 10;
});

val = arr1.every(callBackFun);

function callBackFun(ele, ind, arr) {
  console.log(`${ele} ${ind}`);
  return ele < 100;
}

console.log(val);
console.log(arr1.every((x) => x < 10000));
console.clear();

// every on a string array
val = arr2.every((ele) => {
  console.log(ele);
  return ele.length < 10;
});

console.log(val);

// compare arrays
console.clear();
val = arr2.every((ele) => {
  console.log(ele);
  return arr3.includes(ele);
});

console.log(val);

console.clear();
// loop through and add items
let total = 0;
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i], total);
  total += arr1[i];
}

console.log(total);

/*
total = 0;
for (let i in arr1) {
  console.log(arr1[i], total);
  total += arr1[i];
}

console.log(total);
*/

// this is slightly faster as it loads arr1.length first, not each time
total = 0;
for (let i = 0, len = arr1.length; i < len; i++) {
  console.log(arr1[i], total);
  total += arr1[i];
}

console.log(total);
