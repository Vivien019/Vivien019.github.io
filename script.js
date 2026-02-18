function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      const yOffset = -100;
      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      setTimeout(() => {
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 300);
    }
  }
});

/* HAMBURGER MENÜ*/

const hamburger =
  document.getElementById("hamburger");
const navLinks =
  document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".dropdown > a").forEach(drop => {
  drop.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = drop.nextElementSibling;
    submenu.classList.toggle("active");
  });
});

/* KÉPEK*/

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);


