const holder = document.querySelector(".holder");
holder.style.position = "absolute";
const ele = { x: holder.offsetLeft, y: holder.offsetTop };

holder.addEventListener("click", (e) => {
  ele.x += 50;
  ele.y -= 5;
  holder.style.left = ele.x + "px";
  holder.style.top = ele.y + "px";
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "ArrowLeft") {
    ele.x -= 50;
  }
  if (e.key == "ArrowRight") {
    ele.x += 50;
  }
  if (e.key == "ArrowUp") {
    ele.y -= 50;
  }
  if (e.key == "ArrowDown") {
    ele.y += 50;
  }
  holder.style.left = ele.x + "px";
  holder.style.top = ele.y + "px";
});
