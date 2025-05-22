const output = document.querySelector(".output");
const images = [
  "Mid-Essex_3D.jpg",
  "Mid-Essex_Improved_Full.jpg",
  "Mid-Essex_Tiger1.jpg",
  "Mid-Essex_Tiger2.jpg",
];

cGallery();

function cGallery() {
  let curIndex = 0;
  const gallery = document.createElement("div");
  const curImage = document.createElement("img");
  curImage.setAttribute("src", "Mid-Essex_3D.jpg");
  const btn1 = document.createElement("button");
  btn1.textContent = "Prev";
  const btn2 = document.createElement("button");
  btn2.textContent = "Next";
  output.append(gallery);
  gallery.append(curImage);
  gallery.append(btn1);
  gallery.append(btn2);

  btn1.addEventListener("click", () => {
    curIndex--;
    if (curIndex < 0) {
      curIndex = images.length - 1;
    }
    curImage.src = images[curIndex];
  });

  btn2.addEventListener("click", () => {
    curIndex++;
    if (curIndex >= images.length) {
      curIndex = 0;
    }
    curImage.src = images[curIndex];
  });
}
