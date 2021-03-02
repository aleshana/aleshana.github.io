

// Todays Current Date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var todaysWeekDay = days[d.getDay()];
var todaysDay = d.getDate();
var todaysMonth = months[d.getMonth()];
var todaysYear = d.getFullYear();

var fullDate = todaysWeekDay + ", " + todaysDay + " " + todaysMonth + " " + todaysYear;

console.log(fullDate);
document.getElementById("currentDate").innerHTML = fullDate;


// Toggle Function
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//Current Year
var todaysDate = new Date();
var todaysYear = todaysDate.getFullYear();
console.log(todaysYear);
document.getElementById("currentYear").innerHTML = todaysYear;


//Pancake Breakfast on Saturdays

if (todaysWeekDay == "Friday") {
    document.getElementById("pancakes").innerHTML = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

}
// Loading Font

WebFont.load({
    google: {
      families: [
        'Boogaloo', 'Noto Sans JP','Oxygen' , 'Roboto'
      ]
    }
  });




