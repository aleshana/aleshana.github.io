const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.1302&lon=-111.5785&appid=e73db471f9317b7f3bf9d5f6c28904fc&units=imperial';

const jsObject = new Array;

fetch(apiURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    // console.table(jsObject); ///Temporary reference and check
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
        let day = document.createElement('h4');
        let temp = document.createElement('p');

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

});
