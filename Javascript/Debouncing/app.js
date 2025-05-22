function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function onResize() {
  console.log("Resized: ", new Date().toLocaleTimeString());
}
window.addEventListener("resize", debounce(onResize, 500));
