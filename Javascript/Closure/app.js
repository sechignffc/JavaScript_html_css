// global scope
const a = "hello";
console.log(a);
abc();
// stays global despite function running
console.log(a);

//local scope
function abc() {
  const a = "world"; // if this was remarked out, 'a' would return to global scope
  console.log(a);
}

// using closure vs no closure
function myCount() {
  let count = 0;
  return function () {
    return count++;
  };
}

function myCount2() {
  let count = 0;
  return count++;
}

let cnt = myCount();
let cnt2 = myCount2;

for (let x = 0; x < 10; x++) {
  console.log(cnt());
  console.log(cnt2());
}
