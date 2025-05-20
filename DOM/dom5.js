const first = document.querySelector("input[name='first']");
const last = document.querySelector("input[name='last']");
const chk = document.querySelector("input[type='checkbox']");

first.setAttribute("placeholder", "first name");
last.setAttribute("placeholder", "last name");

first.value = "Giovanni";
last.value = "Sechi";

chk.checked = true;
