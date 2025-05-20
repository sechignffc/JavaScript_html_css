const btn = document.querySelector("button");
let counter = 0;

btn.addEventListener("click", btnClicked);

function btnClicked(e) {
  console.log(e.target);
  counter++;
  console.log("clicked " + counter);
  btn.textContent = "Clicked (" + counter + ")";
  btn.classList.toggle("box");
}

const h1 = document.querySelector("h1");
h1.onclick = btnClicked;

const holder = document.querySelector(".holder");
const divs = holder.querySelectorAll("div");
console.log(divs);
console.clear();
divs.forEach((el, ind) => {
  const val = el.className;
  el.onclick = function () {
    console.log("onclick " + val);
  };
  el.addEventListener(
    "click",
    (e) => {
      console.log("event False " + val);
    },
    false
  );
  el.addEventListener(
    "click",
    (e) => {
      console.log("event True " + val);
    },
    true
  );
});
