const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.1302&lon=-111.5785&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

const jsObject = new Array;

fetch(apiURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    console.table(jsObject); ///Temporary reference and check
    d = Date.now();
    // console.log(d);

    
/**************CurrentWeather**************/

    let image = `<img class = "forecastImg" src= "https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png" 
    alt = "${jsObject.current.weather[0].description}">`;
    let temp = "Temperature: " + jsObject.current.temp.toFixed(0) + "&#176;<br>";
    let desc = "Conditions: " + jsObject.current.weather[0].description.toUpperCase() + "<br>";
    let hum = "Humidity: " + jsObject.current.humidity + "%<br>";

        document.getElementById('currentIcon').innerHTML = image;  
        document.getElementById('currentTemp').innerHTML = temp;
        document.getElementById('currentDesc').innerHTML = desc;
        document.getElementById('currentHum').innerHTML = hum;


/**************ForecastWeather**************/

    //Create array to hold 3-day forecast
    var days3 = new Array();  
    for (i = 0; i<3; i++) {
      days3.push(jsObject.daily[i+1]);
    }
    console.table(days3);  // Check

    var daysShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

     //publish 3-day data to webpage

    var forecastDiv = document.querySelector('div.forecastWeather');

    for (i = 0; i<3; i++) {
        var epochDate = days3[i].dt;
        var forecastDate = new Date(epochDate*1000);
                // console.log(forecastDate);  //log check
        dayWeekShort = daysShort[forecastDate.getDay()];
                // console.log(dayWeekShort);  //log check
        dayTemp = days3[i].temp.day;
                // console.log(dayTemp);  //log check

        let dayForecast = document.createElement('div');
        let image = document.createElement('img');
        let day = document.createElement('div');
        let temp = document.createElement('div');

        day.innerHTML =  dayWeekShort;
        image.innerHTML = "";
        temp.innerHTML = dayTemp.toFixed(0)+ "&#176;";

        dayForecast.setAttribute ('class', 'forecastSection'+i);
        day.setAttribute ('class', 'forecastDay');
        image.setAttribute ('class', 'forecastImg');
        image.setAttribute ('src', `https://openweathermap.org/img/w/${days3[i].weather[0].icon}.png`);
        image.setAttribute ('alt', days3[i].weather[0].description);
        temp.setAttribute ('class', 'forecastTemp');
        
        dayForecast.appendChild(day);
        dayForecast.appendChild(image);  
        dayForecast.appendChild(temp);
        forecastDiv.append(dayForecast);
      
    }

/**************AlertWeather**************/

if (jsObject.alerts != null){

  var wholeMessage;

  let alertMessage = document.createElement('section');
  let alertH2 = document.createElement('h2');
  let alertEvent = document.createElement('div');
  let startDate = document.createElement('div');
  let endDate = document.createElement('div');
  let alertDesc = document.createElement('p');

  var eStartDate = alerts.start;
  var alertStartDate = new Date(eStartDate*1000);
                console.log(alertStartDate);  //log check

  var eEndDate = alerts.start;
  var alertEndDate = new Date(eEndDate*1000);
                console.log(alertEndDate);  //log check
        
  alertH2.innerHTML = "Extreme Weather Warning";
  alertEvent.innerHTML = jsObject.alerts.event;
  startDate.innerHTML = alertStartDate;
  endDate.innerHTML = alertEndDate;
  alertDesc.innerHTML = jsObject.alerts.description;

  alertMessage.setAttribute ('class', 'alertBox');

  alertMessage.appendChild(alertH2);
  alertMessage.appendChild(alertEvent);  
  alertMessage.appendChild(alertStartDate);
  alertMessage.appendChild(startDate);
  alertMessage.appendChild(endDate);
  alertMessage.append(wholeMessage);
  
  alert(wholeMessage);
}

});
