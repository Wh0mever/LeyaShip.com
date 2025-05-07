const navbar = document.getElementById("navbar");
const logo = document.getElementById("nav-logo-img");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.src = "./images/logo2.svg";
  } else {
    navbar.classList.remove("scrolled");
    logo.src = "./images/logo.svg";
  }
});

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
