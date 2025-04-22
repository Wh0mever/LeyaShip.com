document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenuLeft = document.querySelector(".nav-menu-left");
  const navMenuRight = document.querySelector(".nav-menu-right");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuLeft.classList.toggle("active");
    navMenuRight.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenuLeft.classList.remove("active");
      navMenuRight.classList.remove("active");
    });
  });

  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
      header.style.boxShadow = "none";
      header.style.background = "var(--white)";
    }
  });

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
