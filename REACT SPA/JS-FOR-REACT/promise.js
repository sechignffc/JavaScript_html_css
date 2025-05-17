const promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Operation Successful");
    rejected("Operation failed");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
