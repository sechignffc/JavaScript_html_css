const output = document.querySelector("#output");

function adder(val) {
  return function (val2) {
    return val + val2;
  };
}

let a1 = adder(15);
console.log(a1(2));

for (let x = 0; x < 10; x++) {
  output.innerHTML += `<div>Output ${a1(2 + x)}</div>`;
}
