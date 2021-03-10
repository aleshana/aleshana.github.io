const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e73db471f9317b7f3bf9d5f6c28904fc';
const jsObject = new Array;

fetch(apiURL)
  .then((response) => response.json())
  .then ((jsObject) => {
    console.table(jsObject);  // temporary checking for valid response and data parsing
    console.table(jsObject.list);

  console.table(jsObject.city);  //testing json data.

  document.getElementById('current-temp').innerHTML = jsObject.main.temp;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
   
});