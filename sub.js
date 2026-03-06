const links = document.querySelectorAll(".nav-rechts a");
const currentUrl = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkHref = link.getAttribute("href").replace("./", "");
  if (currentUrl === linkHref) {
    link.classList.add("actief");
  }
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navRechts = document.querySelector(".nav-rechts");

hamburgerMenu.addEventListener("click", () => {
  navRechts.classList.toggle("show");
});

if (typeof gsap !== "undefined") {
  gsap.fromTo(
    ".slide1-afbeelding",
    {
      x: 300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide1-afbeelding",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".uitlichting1-links",
    {
      x: -300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".uitlichting1-links",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
}
