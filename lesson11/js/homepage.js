/*********JSON TOWN DATA LOADING***********/
const townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townDataURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns']; //Store data in array

        const boxes = document.querySelector('.townsDiv');  /// the boxes location in HTML
        console.log(boxes);
        const townsFeatured = new Array();
        // console.table(townsFeatured);
        for (let i=0; i < towns.length; i++){
            if 
            (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
              townsFeatured.push(towns[i]);
             }  //if bracket
        }    //for bracket

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


        box.appendChild(h3);  //append h3 to each town section
        box.appendChild(motto);
        box.appendChild(para); 
        box.appendChild(image);
        console.log("*****");
        console.log(box);
        console.log(boxes);
        boxes.append(box);

      });  //townsFeatured.forEach Funcion bracket

      console.table(townsFeatured);

  
 });  // .then jsonObject funtion




