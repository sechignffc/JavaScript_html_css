const url = "my1.json";
const output = document.querySelector(".output");

output.addEventListener("click", getJsonData);

function getJsonData() {
  output.textContent = "loading......";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      myOutput(data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function myOutput(data) {
  let html = `<h1>${data.name}</h1>
  <div>${data.address.street}</div>
  <div>${data.address.city}</div>
  <div>${data.address.state}</div>
  <div>${data.address.zip}</div>
  `;
  data.phoneNumbers.forEach((el) => {
    html += `<small>${el.type} - (${el.number})</small><br>`;
  });
  html += JSON.stringify(data);
  output.innerHTML = html;
}

// const dataObj = JSON.parse(dataString) *** convert a string into JSON
