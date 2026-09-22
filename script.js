const heading = document.querySelector("#message");
const button = document.querySelector("#change-button");

function changeText() {
  heading.textContent = "Goodbye World";
}

button.addEventListener("click", changeText);