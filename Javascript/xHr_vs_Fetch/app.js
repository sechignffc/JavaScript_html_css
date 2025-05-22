// this is the old xHR method
const output = document.querySelector(".output");

const url = "my2.json";
const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    maker(data);
  } else {
    console.error(xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error(xhr.statusText);
};
xhr.send();

// this is the newer fetch method

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    maker(data);
  })
  .catch((error) => console.log(error));

function maker(data) {
  data.forEach((ele) => {
    output.innerHTML += `
    <div>${ele.name.first} ${ele.name.last} ${ele.age}</div>
    ${JSON.stringify(ele)}`;
  });
  output.innerHTML += "<hr>";
}
