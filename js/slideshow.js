let slideIndex = 0;

//showSlides(slideIndex);
autoSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls

function autoSlides() {
  // console.log("hi");
  showSlides(slideIndex);
  slideIndex++;
  setTimeout(autoSlides, 3500);
}

function currentSlide(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  var a = document.getElementById("slider");
  // console.log(a);
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.querySelectorAll(".dot");
  // console.log(slides, dots);
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex].classList.add("active");
  dots[slideIndex].className += " active";
}
