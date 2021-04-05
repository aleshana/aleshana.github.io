const getDirectory = "https://raw.githubusercontent.com/aleshana/aleshana.github.io/master/MapletonChamber/json/businesses.json";

fetch(getDirectory)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonDir) {
    console.table(jsonDir);  // temporary checking

const companies = jsonDir['companies'];

const cards = document.querySelector('section.directGrid'); 

    companies.forEach(company => {
        let card = document.createElement('div');
        let name = document.createElement('h4');
        let logo = document.createElement('img');
        let phone = document.createElement('div');
        let address = document.createElement('div');
        let emailLink = document.createElement('div');
        let urlLink = document.createElement('div');
        
        logo.innerHTML = ""
        name.innerHTML = company.name;
        phone.innerHTML = company.phone;
        address.innerHTML = company.address;
        emailLink.innerHTML = `<a href = "mailto:${company.email}">Email</a>`;
        urlLink.innerHTML = `<a href = "${company.url}">Website</a>`;

        card.setAttribute ('class', "companyDiv");
        // card.setAttribute ('class', `directSection${company.idnumber}`);
        logo.setAttribute ('src', `images/${company.logo}`);
        logo.setAttribute ('alt', `${company.name} Logo`);
        logo.setAttribute ('class', "directLogo");
        
        // console.log(card);

        card.appendChild(name);
        card.appendChild(logo); 
        card.appendChild(phone); 
        card.appendChild(address);
        card.appendChild(emailLink);
        card.appendChild(urlLink);
        cards.append(card);
        // console.table(cards);  // temporary checking

    });
    

});

/*************Grid to List View Code****************/

// var gridColumnOutput = document.getElementsByClassName("directGrid");

function Column1View() {
  document.getElementById("directGrid").style.gridTemplateColumns = '1fr';
}

function Column2View() {
  document.getElementById("directGrid").style.gridTemplateColumns = "50% 50%";
}

function Column3View() {
  document.getElementById("directGrid").style.gridTemplateColumns = "33% 34% 33%";
}
