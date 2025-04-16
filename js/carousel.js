document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".carousel-btn.prev")
  const nextBtn = document.querySelector(".carousel-btn.next")

  let currentSlide = 0
  let slideInterval

  // Initialize the carousel
  function initCarousel() {
    // Set the first slide as active
    slides[currentSlide].classList.add("active")
    dots[currentSlide].classList.add("active")

    // Start the automatic slideshow
    startSlideshow()

    // Add event listeners
    prevBtn.addEventListener("click", prevSlide)
    nextBtn.addEventListener("click", nextSlide)

    // Add click event to dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index)
      })
    })
  }

  // Go to a specific slide
  function goToSlide(index) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove("active")
    dots[currentSlide].classList.remove("active")

    // Update current slide index
    currentSlide = index

    // Add active class to new slide and dot
    slides[currentSlide].classList.add("active")
    dots[currentSlide].classList.add("active")

    // Reset the slideshow timer
    resetSlideshow()
  }

  // Go to the next slide
  function nextSlide() {
    let nextIndex = currentSlide + 1
    if (nextIndex >= slides.length) {
      nextIndex = 0
    }
    goToSlide(nextIndex)
  }

  // Go to the previous slide
  function prevSlide() {
    let prevIndex = currentSlide - 1
    if (prevIndex < 0) {
      prevIndex = slides.length - 1
    }
    goToSlide(prevIndex)
  }

  // Start the automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  // Reset the slideshow timer
  function resetSlideshow() {
    clearInterval(slideInterval)
    startSlideshow()
  }

  // Pause slideshow when user interacts with carousel
  function pauseSlideshow() {
    clearInterval(slideInterval)
  }

  // Resume slideshow after user interaction
  function resumeSlideshow() {
    startSlideshow()
  }

  // Add event listeners for pause/resume on hover
  const carouselContainer = document.querySelector(".carousel-container")
  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", pauseSlideshow)
    carouselContainer.addEventListener("mouseleave", resumeSlideshow)
  }

  // Initialize the carousel if it exists on the page
  if (slides.length > 0) {
    initCarousel()
  }
})
