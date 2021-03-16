const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e73db471f9317b7f3bf9d5f6c28904fc';
const jsObject = new Array;

fetch(apiURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    console.table(jsObject);  // temporary checking for valid response and data parsing
  });

  document.getElementById('current-temp').textContent = jsObject.main.temp;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
   
  
// const weatherData = jsObject['weatherData']; //Store data in array

// const weatherTemp = document.querySelector('span.current-temp'); /// the temperature location in HTML

// const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing

//     const prophets = jsonObject['prophets']; //Store data in array
