/*********JSON FISH HAVEN FORECAST DATA***********/
// let cityID = '5585010';
// let keyID = 'e73db471f9317b7f3bf9d5f6c28904fc';


const fishHavenCurrentURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(fishHavenCurrentURL)
  .then((response) => response.json())
  .then ((jsObject) => {
      
    document.getElementById('windSpeedFishHaven').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('currentTempFishHaven').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('currentDescFishHaven').textContent = jsObject.weather[0].main;
    document.getElementById('humidityFishHaven').textContent =  jsObject.main.humidity;

    
    /*************** Wind Chill Calculations and outputing *************/
    var Temperature = jsObject.main.temp;
    var WindSpeed = jsObject.wind.speed;
    
  
    var answer = windChill(Temperature, WindSpeed);
    document.getElementById('windChillFishHaven').innerHTML = "Wind Chill:  " + answer + " &#8457;";

    function windChill(tempF, speed) {
      var wc = "N/A";
      if (tempF < 50 & speed > 4.8) {
          wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.pow(speed, .16));
          
          wc = wc.toFixed(0)
        }   
      return wc;
      
    }

});

/*********JSON  Fish Haven FORECAST DATA***********/
// let cityID = '5604473';
// let keyID = 'e73db471f9317b7f3bf9d5f6c28904fc';
let apiWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(apiWeatherURL)
  .then((response) => response.json())
  .then ((jsObject2) => {
     

    var forecast5 = []     //create new array of just 18:00:00 objects
    for (i = 0; i< jsObject2.list.length; i++) {
     
      if (jsObject2.list[i].dt_txt.includes('18:00:00')) {                  
                forecast5.push(jsObject2.list[i]);
      }
      
    }
    

    //Populate days in the forecast

    let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var forecastIndex = 0;
    var days5 = new Array();
    for (i = 0; i<6; i++) {
      forecastIndex = (d.getDay() + i) % forecastDays.length;
      days5.push(forecastDays[forecastIndex]);
      
    }
    
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


// /**********--------Fish Haven Town Events---------************/
const townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townDataURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
        let towns = jsonObject['towns']; //Store data in array

        let townFishHaven = new Array();
        for (let i=0; i < towns.length; i++){
            if (towns[i].name == 'Fish Haven') {
             townFishHaven =towns[i];
             }  //if bracket
        }    //for bracket

      
      const eventOutput  = document.querySelector('.gridEventsFishHaven1');  /// the output location in HTML
        let strCityEvents = "";
        let strEvents = new Array(); 

        let eventSection = document.createElement('section');
        let eventPara = document.createElement('p');
        strCityEvents = townFishHaven.name.split(" ").join("");
      
          
        for (i = 0; i< townFishHaven.events.length; i++) {
            strEvents = strEvents += townFishHaven.events[i] + "<br><br>";
            }

        
 
        eventPara.innerHTML = strEvents;
        eventPara.setAttribute ('class',"cityEventPara");
        eventSection.setAttribute ('class',"cityEventSection");

        eventSection.appendChild(eventPara);  //append paragraph to each town event section
        eventOutput.append(eventSection);

    
      
 });  // .then jsonObject funtion