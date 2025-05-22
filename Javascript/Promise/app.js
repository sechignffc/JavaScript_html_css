// this script mimics the behaviour of Javascripts Promise class

class MyPromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = () => {};
    this.finallyHandler = () => {};
    executor(this.onResolve.bind(this), this.onReject.bind(this));
  }
  onResolve(data) {
    this.queue.forEach((callback) => {
      data = callback(data);
    });
    this.finallyHandler();
  }
  onReject(error) {
    this.errorHandler(error);
    this.finallyHandler();
  }
  then(callback) {
    this.queue.push(callback);
    return this;
  }
  catch(callback) {
    this.queue.push(callback);
    return this;
  }
  finally(callback) {
    this.finallyHandler = callback;
    return this;
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Received!");
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
    return "Processing Data";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Promise completed");
  });
