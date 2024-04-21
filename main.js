var scrollToTopBtn = document.getElementById("scrollToTopBtn");

function checkScroll() {
  if (window.scrollY > 100) { 
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}

window.addEventListener("scroll", checkScroll);

scrollToTopBtn.addEventListener("click", scrollToTop);
