const ele1 = document.getElementById("myEle");
console.log(ele1);

const ele2 = document.querySelector(".output");
console.log(ele2);

const val1 = "h1";
const ele3 = document.querySelector(val1);
console.log(ele3);

const ele4 = document.querySelector("#myEle");
console.log(ele4);

console.log(ele1.textContent);
ele1.textContent = "Giovanni Sechi";
console.log(ele4.textContent);

const myObj1 = {
  first: "Giovanni",
};

const my1 = myObj1;
const my2 = myObj1;

my1.first = "Sechi";

console.log(my2);

const eles1 = document.querySelectorAll(".output");
console.log(eles1);

console.clear();
eles1.forEach(function (ele) {
  console.log(ele.textContent);
});
