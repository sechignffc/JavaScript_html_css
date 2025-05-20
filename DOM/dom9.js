const first = document.querySelector("input");
const btn = document.querySelector("button");
const holder = document.querySelector(".holder");
const div = document.createElement("div");
const output = document.querySelector("div.output");
output.style.border = "1px solid black";
let counter = 0;
output.addEventListener("click", adder);

first.value = "Giovanni";
btn.addEventListener("click", (e) => {
  //holder.innerHTML = "";
  console.log(first.value);
  div.textContent = first.value;
  console.log(div);
  const div1 = document.createElement("div");
  holder.append(div1);
  div1.textContent = "HELLO";
  holder.append(div);
  holder.prepend(div);
  div.style.color = "red";
});

function adder() {
  counter++;
  console.log("clicked");
  const newEle = createElement("div", output, "hi " + counter);
  console.log(newEle);
  newEle.style.background = "blue";
}

function createElement(elType, parent, html) {
  const ele = document.createElement(elType);
  ele.innerHTML = html;
  parent.appendChild(ele);
  return parent.appendChild(ele);
}
