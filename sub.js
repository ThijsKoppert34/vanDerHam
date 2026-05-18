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
  const isOpen = navRechts.classList.toggle("show");
  hamburgerMenu.innerHTML = isOpen ? "✕" : "☰";
});

// === PROJECT DETAIL — GALERIJ ===
const galleryMain = document.querySelector(".gallery-main-img");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");
const galleryPrev = document.querySelector(".gallery-arrow-prev");
const galleryNext = document.querySelector(".gallery-arrow-next");

if (galleryMain && galleryThumbs.length > 0) {
  let currentIndex = Array.from(galleryThumbs).findIndex((t) =>
    t.classList.contains("actief")
  );
  if (currentIndex === -1) currentIndex = 0;

  const setActive = (index) => {
    currentIndex = (index + galleryThumbs.length) % galleryThumbs.length;
    const newSrc = galleryThumbs[currentIndex].dataset.img;
    galleryMain.style.opacity = "0";
    setTimeout(() => {
      galleryMain.src = newSrc;
      galleryMain.style.opacity = "1";
    }, 150);
    galleryThumbs.forEach((t, i) =>
      t.classList.toggle("actief", i === currentIndex)
    );
  };

  galleryThumbs.forEach((thumb, i) =>
    thumb.addEventListener("click", () => setActive(i))
  );

  if (galleryPrev) {
    galleryPrev.addEventListener("click", () => setActive(currentIndex - 1));
  }
  if (galleryNext) {
    galleryNext.addEventListener("click", () => setActive(currentIndex + 1));
  }
}

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
