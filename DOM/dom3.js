const outputs = document.querySelectorAll(".output");
let html = '<div style="color:red">Giovanni <br> Sechi</div>';
console.dir(outputs[0].tagName);
if (outputs[0].tagName != "H1") {
  outputs[0].textContent = html;
}
outputs[1].innerHTML = html;

outputs.forEach((el, ind) => {
  if (el.tagName != "H1") {
    el.innerHTML = html;
  }
  el.textContent += " " + ind;
});

document.write(html);
