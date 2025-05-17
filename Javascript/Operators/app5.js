let val = 2;

console.log(val + 6);
console.log(val * 6);
console.log(val - 3);
console.log(val / 2);

val = 51;
val = 51 % 10;

console.log(val); // modulus returns the remainder, i.e. 1

val++;
val--;

console.log(val);

val -= 3;
val += 10;
val *= 5;

console.log(val);

let val1 = "Giovanni";
let val2 = "Sechi";

val = val1 + " " + val2;
console.log(val);

val += " Super Hero";
console.log(val);

let val3 = 10 + 10 + "10"; // this returns 2010, does initial addition to get 20 then adds string

let output = 10 == 10; // returns true
output = 10 != 10; // returns false
output = 10 == "10"; // returns true, as we used == it converts the string
output = 10 === "10"; // returns false
output = 50 >= 10; // returns true
