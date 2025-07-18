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

hamburgerMenu.addEventListener("click", () => {
  navRechts.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slider = sliderWrapper.querySelector(".slider");
  const slides = Array.from(slider.children).filter(
    (el) => el.tagName.toLowerCase() === "img"
  );

  let currentIndex = 0;
  const delay = 5000; // 5 seconden

  function goToSlide(index) {
    const slideWidth = slider.clientWidth;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }

  setInterval(nextSlide, delay);
});
