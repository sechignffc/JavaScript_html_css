function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
    });
}

async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();

    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

fetchDataAsync();
