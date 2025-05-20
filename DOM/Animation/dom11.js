const output = document.querySelector(".output");
output.style.width = "100px";
output.style.height = "100px";
output.style.background = "red";
output.style.textAlign = "center";
output.style.lineHeight = "100px";
output.style.color = "white";
output.style.position = "absolute";

function ran() {
  return Math.floor(Math.random() * 255);
}

output.addEventListener("click", (e) => {
  const col = "rgb(" + ran() + "," + ran() + "," + ran() + ")";
  output.style.background = col;
  console.log(col);
});

const player = {
  x: 0,
  y: 0,
  speed: 10,
  ani: window.requestAnimationFrame(moveMe),
};

const keyz = {
  ArrowDown: false,
  ArrowUp: false,
  ArrowLeft: false,
  ArrowRight: false,
};

window.addEventListener("keydown", (e) => {
  console.log(e.code);
  keyz[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  keyz[e.code] = false;
});

function moveMe() {
  if (keyz.ArrowRight) {
    player.x += player.speed;
  }
  if (keyz.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keyz.ArrowUp) {
    player.y -= player.speed;
  }
  if (keyz.ArrowDown) {
    player.y += player.speed;
  }
  output.style.left = player.x + "px";
  output.style.top = player.y + "px";
  player.ani = window.requestAnimationFrame(moveMe);
}
