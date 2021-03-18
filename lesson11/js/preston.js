//************Pancake Breakfast on Saturdays

if (todaysWeekDay == "Friday") {
    document.getElementById("pancakes").innerHTML = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

}

 /*********JSON PRESTON CURRENT WEATHER DATA***********/


 const prestonCurrentURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(prestonCurrentURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    console.table(jsObject);  // temporary checking for valid response and data parsing
    
    document.getElementById('windSpeedPreston').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('currentTempPreston').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('currentDescPreston').textContent = jsObject.weather[0].main;
    document.getElementById('humidityPreston').textContent =  jsObject.main.humidity;

    console.log(jsObject.wind.speed.toFixed(0));

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
          console.log(wc);
          console.log(tempF);
          console.log(speed);
          wc = wc.toFixed(0)
        }   
      return wc;
      
    }

});

/*********JSON PRESTON FORECAST DATA***********/
// let cityID = '5604473';
// let keyID = 'e73db471f9317b7f3bf9d5f6c28904fc';
let apiWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

fetch(apiWeatherURL)
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

    document.getElementById('gridForecastPreston').innerHTML = strForecast;
   
  });


// /**********--------Preston Town Events---------************/
const townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townDataURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

        let towns = jsonObject['towns']; //Store data in array

        let townPreston = new Array();
        for (let i=0; i < towns.length; i++){
            if (towns[i].name == 'Preston') {
             townPreston =towns[i];
             }  //if bracket
        }    //for bracket

      console.table(townPreston);

      const eventOutput  = document.querySelector('.gridEventsPreston1');  /// the output location in HTML
        let strCityEvents = "";
        let strEvents = new Array(); 

        let eventSection = document.createElement('section');
        let eventPara = document.createElement('p');
        strCityEvents = townPreston.name.split(" ").join("");
      
          console.log(townPreston.events);

        for (i = 0; i< townPreston.events.length; i++) {
            strEvents = strEvents += townPreston.events[i] + "<br><br>";
            }

        console.log(strEvents);
        console.log(strCityEvents);
 
        eventPara.innerHTML = strEvents;
        eventPara.setAttribute ('class',"cityEventPara");
        eventSection.setAttribute ('class',"cityEventSection");

        eventSection.appendChild(eventPara);  //append paragraph to each town event section
        eventOutput.append(eventSection);

    
      
 });  // .then jsonObject funtion

       

