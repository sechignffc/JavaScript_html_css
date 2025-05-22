// function to create an independent clone of an object that won't be affected by the original

const obj1 = {
  name: "Giovanni",
  age: 51,
  details: {
    hobbies: ["reading", "sports"],
    address: { city: "Chelmsford", country: "UK" },
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const clone = deepClone(obj1);
clone.name = "John";

console.log(obj1);
console.log(clone);
