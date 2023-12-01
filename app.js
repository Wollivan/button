const button = document.querySelector("button");

function moveButton() {
  let x = Math.abs(Math.floor(Math.random() * window.innerWidth - 90));
  let y = Math.abs(Math.floor(Math.random() * window.innerHeight - 30));
  console.log("first");
  button.style.left = x + "px";
  button.style.top = y + "px";
}

button.addEventListener("mouseover", moveButton);
