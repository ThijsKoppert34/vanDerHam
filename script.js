gsap.utils.toArray(".hulp-tegel").forEach((tegel, i) => {
  gsap.from(tegel, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.1, // staggered binnenkomst
    scrollTrigger: {
      trigger: tegel,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

const uitlichtingLinks = document.querySelectorAll(".uitlichting1-links");

gsap.fromTo(
  ".slide-afbeelding",
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
      trigger: ".slide-afbeelding",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".uitlichting-links",
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



const hamburgerMenu = document.querySelector(".hamburger-menu");
const navRechts = document.querySelector(".nav-rechts");

hamburgerMenu.addEventListener("click", () => {
  navRechts.classList.toggle("show");
});
