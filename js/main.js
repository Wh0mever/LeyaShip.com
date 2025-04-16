// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Header scroll effect
  const header = document.getElementById("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      header.style.background = "rgba(255, 255, 255, 0.95)"
    } else {
      header.style.boxShadow = "none"
      header.style.background = "var(--white)"
    }
  })

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    // Function to send email using mailto
    window.sendEmail = (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      const mailtoSubject = encodeURIComponent(subject)
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

      window.location.href = `mailto:info@leyashipmanagement.com?subject=${mailtoSubject}&body=${mailtoBody}`

      // Optional: Reset the form
      contactForm.reset()
    }
  }
})
