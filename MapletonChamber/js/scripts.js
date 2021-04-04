// Todays Current Date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var todaysWeekDay = days[d.getDay()];
var todaysDay = d.getDate();
var todaysMonth = months[d.getMonth()];
var todaysYear = d.getFullYear();

var fullDate = todaysWeekDay + ", " + todaysDay + " " + todaysMonth + " " + todaysYear;

// console.log(fullDate);
document.getElementById("currentDate").innerHTML = fullDate;


// Toggle Function
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//Current Year
var todaysDate = new Date();
var todaysYear = todaysDate.getFullYear();
// console.log(todaysYear);
document.getElementById("currentYear").innerHTML = todaysYear;


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

