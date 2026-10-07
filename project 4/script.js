
function moveRandomEl(elm) {
  const margin = 16;
  const maxLeft = Math.max(margin, window.innerWidth - elm.offsetWidth - margin);
  const maxTop = Math.max(margin, window.innerHeight - elm.offsetHeight - margin);
  elm.style.position = "fixed";
  elm.style.left = `${margin + Math.random() * (maxLeft - margin)}px`;
  elm.style.top = `${margin + Math.random() * (maxTop - margin)}px`;
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("pointerenter", () => {
  moveRandomEl(moveRandom);
});

moveRandom.addEventListener("click", event => {
  event.preventDefault();
  moveRandomEl(moveRandom);
});

moveRandom.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    moveRandomEl(moveRandom);
  }
});
