const getDirectory = "json/businesses.json";

fetch(getDirectory)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonDir) {
    console.table(jsonDir);  // temporary checking

const companies = jsonObject['companies'];

});