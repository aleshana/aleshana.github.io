

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

/*******Thank You Page Loading********/
  function thanksPage() {
    window.open("https://aleshana.github.io/lesson08/thanks.html");
  }

  /********Slider*********/
  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


/*********JSON TOWN DATA LOADING***********/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns']; //Store data in array

    const boxes = document.querySelector('div.townsDiv');  /// the boxes location in HTML

    const townsFeatured = new Array();
    // console.table(townsFeatured);
    for (let i=0; i < towns.length; i++){
        if 
        (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
          townsFeatured.push(towns[i]);
            }

    }
    // console.table(townsFeatured);
    townsFeatured.forEach(town => {
        let box = document.createElement('section');
        let h3 = document.createElement('h3');
        let motto = document.createElement('h6');
        let para = document.createElement('p');
        let image = document.createElement('img');


        h3.innerHTML = town.name;
        motto.innerHTML =  town.motto;   
        para.innerHTML = `Year Founded: ${town.yearFounded} <br>
        Population: ${town.currentPopulation}<br>
        Annual Rain Fall: ${town.averageRainfall}`;
               
        box.setAttribute ('class',"homeTownBox");
        h3.setAttribute ('class',"homeTownHeader");
        motto.setAttribute ('class',"homeTagline");
        para.setAttribute ('class',"homePara");
        image.setAttribute ('src', "images/" + town.photo);
        image.setAttribute ('alt', `Photo from the town of ${town.name}.`);
        image.setAttribute ('class',"homeTownImg");


        box.appendChild(h3);  //append h3 to each town section
        box.appendChild(motto);
        box.appendChild(para); 
        box.appendChild(image);
        boxes.append(box);
        
    });
});

/*********JSON PRESTON CURRENT WEATHER DATA***********/

const prestonCurrentURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(prestonCurrentURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    // console.table(jsObject);  // temporary checking for valid response and data parsing
    
    document.getElementById('windSpeedPreston').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('currentTempPreston').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('currentDescPreston').textContent = jsObject.weather[0].main;
    document.getElementById('humidityPreston').textContent =  jsObject.main.humidity;

    /*************** Wind Chill Calculations and outputing *************/
    var Temperature = jsObject.main.temp;
    var WindSpeed = jsObject.wind.speed;
    console.log(Temperature);
  
    var answer = windChill(Temperature, WindSpeed);
    document.getElementById('windChillPreston').innerHTML = "Wind Chill:  " + answer + " &#8457;";

    function windChill(tempF, speed) {
      var wc = "N/A";
      if (tempF < 50 & speed > 4.8) {
          wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.pow(speed, .16));
          // console.log(wc);
          // console.log(tempF);
          // console.log(speed);
          wc = wc.toFixed(0)
        }   
      return wc;
      
    }

});

/*********JSON PRESTON FORECAST DATA***********/
// let cityID = '5604473';
// let keyID = 'e73db471f9317b7f3bf9d5f6c28904fc';
let prestonForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(prestonForecastURL)
  .then((response) => response.json())
  .then ((jsObject2) => {
    console.table(jsObject2); 

    console.log(jsObject2.list[0].dt_txt);

    var forecast5 = []     //create new array of just 18:00:00 objects
    for (i = 0; i< jsObject2.list.length; i++) {
     
      if (jsObject2.list[i].dt_txt.includes('18:00:00')) {                  ///.clouds.dt_txt === "*18:00:00")
        // console.log(jsObject2.list[i].dt_txt);
        forecast5.push(jsObject2.list[i]);
      }
      // else {
      //   console.log(jsObject2.list[i].dt_txt);
      // }
    }
    console.log(forecast5);  //check new array

    //Populate days in the forecast

    let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var forecastIndex = 0;
    var days5 = new Array();
    for (i = 0; i<6; i++) {
      forecastIndex = (d.getDay() + i) % forecastDays.length;
      days5.push(forecastDays[forecastIndex]);
      
    }
    console.log(days5);

    //publish 5-day data to webpage
    var strForecast = "";
    for (i = 0; i<5; i++) {
          
      strForecast = strForecast +=`<section class = "day${i+1}"> ${days5[i+1]}<br> 
      <img class = "forecastImg" src= "https://openweathermap.org/img/w/${forecast5[i].weather[0].icon}.png" 
      alt = "${forecast5[i].weather[0].description}"><br>
      <div class = "forecastDayTemp">${forecast5[i].main.temp.toFixed(0)} &#8457;</div></section>`;
      }
      console.log(strForecast);

    document.getElementById('gridForecastPreston').innerHTML = strForecast;
   
  });
  


/*********JSON FISH HAVEN FORECAST DATA***********/
// let cityID = '5585010';
// let keyID = 'e73db471f9317b7f3bf9d5f6c28904fc';
let fishHavenForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(fishHavenForecastURL)
  .then((response) => response.json())
  .then ((jsObject2) => {
    console.table(jsObject2); 

    // console.log(jsObject2.list[0].dt_txt);

    var forecast5 = []     //create new array of just 18:00:00 objects
    for (i = 0; i< jsObject2.list.length; i++) {
     
      if (jsObject2.list[i].dt_txt.includes('18:00:00')) {                  ///.clouds.dt_txt === "*18:00:00")
        // console.log(jsObject2.list[i].dt_txt);
        forecast5.push(jsObject2.list[i]);
      }
      // else {
      //   console.log(jsObject2.list[i].dt_txt);
      // }
    }
    console.log(forecast5);  //check new array

    //Populate days in the forecast

    let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var forecastIndex = 0;
    var days5 = new Array();
    for (i = 0; i<6; i++) {
      forecastIndex = (d.getDay() + i) % forecastDays.length;
      days5.push(forecastDays[forecastIndex]);
      
    }
    console.log(days5);

    //publish 5-day data to webpage
    var strForecast = "";
    for (i = 0; i<5; i++) {
          
      strForecast = strForecast +=`<section class = "day${i+1}"> ${days5[i+1]}<br> 
      <img class = "forecastImg" src= "https://openweathermap.org/img/w/${forecast5[i].weather[0].icon}.png" 
      alt = "${forecast5[i].weather[0].description}"><br>
      <div class = "forecastDayTemp">${forecast5[i].main.temp.toFixed(0)} &#8457;</div></section>`;
      }

    document.getElementById('gridForecastFishHaven').innerHTML = strForecast;
   
  });

  /*********JSON FISH HAVEN CURRENT WEATHER DATA***********/

const fishHavenCurrentURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';


fetch(fishHavenCurrentURL)
  .then((response) => response.json())
  .then ((jsObject) => {
  console.table(jsObject);  // temporary checking for valid response and data parsing
    
    document.getElementById('windSpeedFishHaven').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('currentTempFishHaven').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('currentDescFishHaven').textContent = jsObject.weather[0].main;
    document.getElementById('humidityFishHaven').textContent =  jsObject.main.humidity;

    /*************** Wind Chill Calculations and outputing *************/
    var Temperature = jsObject.main.temp;
    var WindSpeed = jsObject.wind.speed;
    console.log(Temperature);
  
    var answer = windChill(Temperature, WindSpeed);
    document.getElementById('windChillFishHaven').innerHTML = "Wind Chill:  " + answer + " &#8457;";

    function windChill(tempF, speed) {
      var wc = "N/A";
      if (tempF < 50 & speed > 4.8) {
          wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.pow(speed, .16));
          // console.log(wc);
          // console.log(tempF);
          // console.log(speed);
          wc = wc.toFixed(0)
        }   
      return wc;
      
    }

});

/*********JSON SODA SPRINGS FORECAST DATA***********/
// let cityID = '5607916';
// let keyID = 'e73db471f9317b7f3bf9d5f6c28904fc';
let sodaSpringsForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(sodaSpringsForecastURL)
  .then((response) => response.json())
  .then ((jsObject2) => {
    console.table(jsObject2); 

    // console.log(jsObject2.list[0].dt_txt);

    var forecast5 = []     //create new array of just 18:00:00 objects
    for (i = 0; i< jsObject2.list.length; i++) {
     
      if (jsObject2.list[i].dt_txt.includes('18:00:00')) {                  ///.clouds.dt_txt === "*18:00:00")
        // console.log(jsObject2.list[i].dt_txt);
        forecast5.push(jsObject2.list[i]);
      }
      // else {
      //   console.log(jsObject2.list[i].dt_txt);
      // }
    }
    console.log(forecast5);  //check new array

    //Populate days in the forecast

    let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var forecastIndex = 0;
    var days5 = new Array();
    for (i = 0; i<6; i++) {
      forecastIndex = (d.getDay() + i) % forecastDays.length;
      days5.push(forecastDays[forecastIndex]);
      
    }
    console.log(days5);

    //publish 5-day data to webpage
    var strForecast = "";
    for (i = 0; i<5; i++) {
          
      strForecast = strForecast +=`<section class = "day${i+1}"> ${days5[i+1]}<br> 
      <img class = "forecastImg" src= "https://openweathermap.org/img/w/${forecast5[i].weather[0].icon}.png" 
      alt = "${forecast5[i].weather[0].description}"><br>
      <div class = "forecastDayTemp">${forecast5[i].main.temp.toFixed(0)} &#8457;</div></section>`;
      }

    document.getElementById('gridForecastSodaSprings').innerHTML = strForecast;
   
  });

  /*********JSON SODA SPRINGS CURRENT WEATHER DATA***********/

const sodaSpringsCurrentURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';


fetch(sodaSpringsCurrentURL)
  .then((response) => response.json())
  .then ((jsObject) => {
  console.table(jsObject);  // temporary checking for valid response and data parsing
    
    document.getElementById('windSpeedSodaSprings').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('currentTempSodaSprings').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('currentDescSodaSprings').textContent = jsObject.weather[0].main;
    document.getElementById('humiditySodaSprings').textContent =  jsObject.main.humidity;

    /*************** Wind Chill Calculations and outputing *************/
    var Temperature = jsObject.main.temp;
    var WindSpeed = jsObject.wind.speed;
    console.log(Temperature);
  
    var answer = windChill(Temperature, WindSpeed);
    document.getElementById('windChillSodaSprings').innerHTML = "Wind Chill:  " + answer + " &#8457;";

    function windChill(tempF, speed) {
      var wc = "N/A";
      if (tempF < 50 & speed > 4.8) {
          wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.pow(speed, .16));
          // console.log(wc);
          // console.log(tempF);
          // console.log(speed);
          wc = wc.toFixed(0)
        }   
      return wc;
      
    }

});

  