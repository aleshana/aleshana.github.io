const getDirectory = "https://raw.githubusercontent.com/aleshana/aleshana.github.io/master/MapletonChamber/json/businesses.json";

fetch(getDirectory)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonDir) {
    console.table(jsonDir);  // temporary checking

const companies = jsonDir['companies'];

});