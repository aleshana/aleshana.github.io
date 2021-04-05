//HomePage Hero Image Slide Show
var slideIndex = 0;
slideShow();

function slideShow() {
  var i;
  var slides = document.getElementsByClassName("sliderImage");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides[i]);
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(slideShow, 2000); // Change image every 2 sec
}

