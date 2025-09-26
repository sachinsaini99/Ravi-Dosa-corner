let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  
  if (n >= slides.length) {
    slideIndex = 0;
  }
  
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the current slide
  slides[slideIndex].style.display = "block";
}

// Auto slide every 5 seconds
setInterval(function() {
  nextSlide();
}, 3000);
