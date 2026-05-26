const hamburgerMenu = document.querySelector(".hamburger-menu");
const navRechts = document.querySelector(".nav-rechts");

hamburgerMenu.addEventListener("click", () => {
  const isOpen = navRechts.classList.toggle("show");
  hamburgerMenu.innerHTML = isOpen ? "✕" : "☰";
});
