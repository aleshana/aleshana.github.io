const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.1302&lon=-111.5785&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

const jsObject = new Array;

fetch(apiURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    
    d = Date.now();
    

    
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
   

    var daysShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

     //publish 3-day data to webpage

    var forecastDiv = document.querySelector('div.forecastWeather');

    for (i = 0; i<3; i++) {
        var epochDate = days3[i].dt;
        var forecastDate = new Date(epochDate*1000);
                
        dayWeekShort = daysShort[forecastDate.getDay()];
                
        dayTemp = days3[i].temp.day;
                
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

  //   var wholeMessage;
  
  let eStartDate = jsObject.alerts[0].start;
  let alertStartDate = new Date(eStartDate*1000);
  
                  
  
  let eEndDate = jsObject.alerts[0].start;
  let alertEndDate = new Date(eEndDate*1000);
                  
          
    let alertH = "EXTREME WEATHER WARNING";
    let sender = jsObject.alerts[0].sender_name;
    let alertevent = jsObject.alerts[0].event;
    let alertDesc = jsObject.alerts[0].description;
  
    let alertMessage = 
    `********${alertH}******** 
    -----------${alertevent}----------
    
    ${alertDesc}
    
    ---Starting Date--- ${alertStartDate}
    ---Ending Date---${alertEndDate}  
  
    from ${sender}`
  
    alert(alertMessage);
  }
  
});
