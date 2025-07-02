console.log("jo allemaal");

const links = document.querySelectorAll(".nav-rechts a");
const currentUrl = window.location.pathname.split("/").pop(); // haalt bv. diensten.html op

links.forEach((link) => {
  const linkHref = link.getAttribute("href").replace("./", "");
  if (currentUrl === linkHref) {
    link.classList.add("actief");
  }
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navRechts = document.querySelector(".nav-rechts");

console.log(hamburgerMenu, navRechts);

hamburgerMenu.addEventListener("click", () => {
  navRechts.classList.toggle("show");
});
