

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
var fridayDay = d.getDate();
console.log(fridayDay);

if (fridayDay == 5) {
    document.getElementById("pancakes").innerHTML = "Preston Pancakes in the Park! " +
     "9:00 a.m. Saturday at the city park pavilion.";

}

// Loading Font

WebFont.load({
    google: {
      families: [
        'Lato', 'Oxygen' , 'Roboto'
      ]
    }
  });

//   Weather Wind chill Factor
/*
Input:  Get temperature and wind speed from user.
Process:  transfer user input into the wind chill function
Wind chill = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)
return ansnwer to the input/output function
Output:  Output the answer to the user.
*/

function doInputOutput() {  

    var Temperature = parseFloat(document.getElementById('temperature').value);
    var WindSpeed = parseFloat(document.getElementById('windSpeed').value);
   

    var answer = windChill(Temperature, WindSpeed);
    document.getElementById('windChillOutput').innerHTML = "Wind Chill:  " + answer.toFixed(2) + " &#8457;";
   
}


function windChill(tempF, speed) {

    var wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.
    pow(speed, .16));
    console.log(wc);
    console.log(tempF);
    console.log(speed);
    return wc;
    
}





