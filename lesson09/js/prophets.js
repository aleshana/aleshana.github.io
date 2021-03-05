const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets']; //Store data in array

    const cards = document.querySelector('div.cards');  //.appendChild(card); /// the card location in HTML

    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let para = document.createElement('p');
        let image = document.createElement('img');
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        para.innerHTML = `Date of Birth: ${prophet.birthdate} <br>
        Place of Birth: ${prophet.birthplace}`;
        image.innerHTML = ""
        image.setAttribute ('src', prophet.imageurl);
        image.setAttribute ('alt', `Portrait of prophet ${prophet.name} ${prophet.lastname}
        who was born in ${prophet.birthdate}.`);


        card.appendChild(h2);  //appendChild is h2 to card
        card.appendChild(para);
        card.appendChild(image);
        cards.append(card);


    });
});

//   for (let i = 0; i < prophets.length; i++ ) {

//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');

//     h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
//     card.appendChild(h2);  //appendChild is h2 to card

//     document.querySelector('div.cards').appendChild(card);

//   }