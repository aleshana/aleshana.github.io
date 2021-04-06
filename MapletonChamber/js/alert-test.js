const getTest = "https://raw.githubusercontent.com/aleshana/aleshana.github.io/master/MapletonChamber/json/alert-test.json";
const jsTest = new Array;

fetch(getTest)
  .then((response) => response.json())
  .then ((jsTest) => {
    console.table(jsTest); ///Temporary reference and check
    d = Date.now();
    // console.log(d);

if (jsObject.alerts != null){

  var wholeMessage;

  let alertMessage = document.createElement('section');
  let alertH2 = document.createElement('h2');
  let alertEvent = document.createElement('div');
  let startDate = document.createElement('div');
  let endDate = document.createElement('div');
  let alertDesc = document.createElement('p');

  var eStartDate = alerts.start;
  var alertStartDate = new Date(eStartDate*1000);
                console.log(alertStartDate);  //log check

  var eEndDate = alerts.start;
  var alertEndDate = new Date(eEndDate*1000);
                console.log(alertEndDate);  //log check
        
  alertH2.innerHTML = "Extreme Weather Warning";
  alertEvent.innerHTML = jsObject.alerts.event;
  startDate.innerHTML = alertStartDate;
  endDate.innerHTML = alertEndDate;
  alertDesc.innerHTML = jsObject.alerts.description;

  alertMessage.setAttribute ('class', 'alertBox');

  alertMessage.appendChild(alertH2);
  alertMessage.appendChild(alertEvent);  
  alertMessage.appendChild(alertStartDate);
  alertMessage.appendChild(startDate);
  alertMessage.appendChild(endDate);
  alertMessage.append(wholeMessage);
  
  alert(wholeMessage);
}

});

