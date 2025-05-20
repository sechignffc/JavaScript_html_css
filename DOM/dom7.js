const btn = document.querySelector("button");
const holder = document.querySelector(".holder");
const inputs = document.querySelectorAll("input");
const h1 = document.querySelector("h1");

btn.addEventListener("click", adder);
btn.addEventListener("click", (e) => {
  console.log("two");
});

holder.addEventListener("mouseover", (e) => {
  holder.style.background = "red";
  //holder.classList.toggle("box");
});
holder.addEventListener("mouseout", (e) => {
  holder.style.background = "white";
});
holder.addEventListener("click", (e) => {
  holder.style.background = "blue";
});
holder.addEventListener("click", (e) => {
  output("test", e);
});

function output(a, e) {
  console.log(a);
}

function adder(e) {
  const el = e.target;
  el.removeEventListener("click", adder);
  el.style.color = "#ddd";
  console.log("clicked");
}

inputs.forEach((el) => {
  el.addEventListener("change", updater);
  el.addEventListener("focus", (e) => {
    console.log(el.textContent);
    el.style.background = "red";
    el.style.color = "white";
  });
  el.addEventListener("focusout", (e) => {
    // or use blur
    console.log(el.textContent);
    el.style.background = "white";
    el.style.color = "black";
  });
});

function updater(e) {
  const val = e.target.value;
  h1.textContent = val;
}
