

/************Todays Current Date********/
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


/**************Toggle Function********/
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


/************Current Year********/
var todaysDate = new Date();
var todaysYear = todaysDate.getFullYear();
console.log(todaysYear);
document.getElementById("currentYear").innerHTML = todaysYear;


/**************Pancake Breakfast on Saturdays********/

// if (todaysWeekDay == "Friday") {
//     document.getElementById("pancakes").innerHTML = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

// }


//**************Loading Font********/

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
  .then(function (jsonTown) {
    console.table(jsonTown);  // temporary checking for valid response and data parsing

    const towns = jsonTown['towns']; //Store data in array

    const boxes = document.querySelector('div.townsDiv');  /// the boxes location in HTML

    const townsFeatured = new Array();
    console.table(townsFeatured);
    for (let i=0; i < towns.length; i++){
        if 
        (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
          townsFeatured.push(towns[i]);
            }

    }
    console.table(townsFeatured);
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


        box.appendChild(h3);  //appendChild is h2 to card
        box.appendChild(motto);
        box.appendChild(para); 
        box.appendChild(image);
        boxes.append(box);

    });
});
