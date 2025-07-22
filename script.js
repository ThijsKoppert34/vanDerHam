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

// muis bolletje uitlichting hieronder

const uitlichting = document.querySelector(".uitlichting");

const cursor = document.createElement("div");
cursor.classList.add("cursor-follow");
uitlichting.appendChild(cursor);

uitlichting.addEventListener("mousemove", (e) => {
  const rect = uitlichting.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  cursor.style.opacity = 1;
});

uitlichting.addEventListener("mouseleave", () => {
  cursor.style.opacity = 0;
});

gsap.registerPlugin(ScrollTrigger);

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
      trigger: ".uitlichting-links",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navRechts = document.querySelector(".nav-rechts");

console.log(hamburgerMenu, navRechts);

hamburgerMenu.addEventListener("click", () => {
  navRechts.classList.toggle("show");
});
