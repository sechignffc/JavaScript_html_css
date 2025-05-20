const h1 = document.querySelector("h1");

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("ready");
  const output = document.querySelector(".output");
  console.log(output);
});

document.body.onload = () => {
  console.log("body loaded");
};

document.body.addEventListener("keydown", (e) => {
  console.log(e);
  h1.textContent += e.key;
});

console.dir(window);
window.onresize = () => {
  h1.innerText = window.innerHeight + " " + window.innerWidth;
};
