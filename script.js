const container = document.querySelector(".container");
const btn = document.querySelector(".form-wrapper-left button");

btn.addEventListener("click", () => {
  container.classList.toggle("switch");
});
