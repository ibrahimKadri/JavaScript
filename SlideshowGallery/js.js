// var slide = document.getElementById('slide');
// var rightArrow = document.getElementsByClassName('right-arrow');
// var leftArrow = document.getElementsByClassName('left-arrow');

// function nextImg() {
//     var slideNumber = slide.dataset.number;
//     // alert(slide.dataset.number)
//     if(slideNumber == 3){
//         slideNumber == 1;

//     }
// }
// function previousImg() {

// }

/********************************************************/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}