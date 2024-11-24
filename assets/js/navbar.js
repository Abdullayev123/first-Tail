const hamburger = document.querySelector(".hamburger");
const hidden = document.querySelector(".hidden_Menu");
hamburger.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
});
