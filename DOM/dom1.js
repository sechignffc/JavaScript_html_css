console.dir(document);

let val = document.URL;
console.log(val);

let ele = document.querySelector(".output");
console.dir(ele.textContent);

ele.textContent = "Hello World";

let myDom = {
  URL: "My URL",
  children: [
    {
      html: {
        body: "content",
      },
    },
  ],
};
