function RAN_NUM(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(RAN_NUM(10, 100));
