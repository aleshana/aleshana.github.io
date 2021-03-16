/* Weather Wind chill Factor Calculations
Wind chill = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)
*/


/*********WIND CHILL CALCULATION***********/

window.onload = function doInputOutput() {  
        
    var Temperature = parseInt(document.getElementById('currentTemp').innerHTML);
    var WindSpeed = parseInt(document.getElementById('windSpeed').innerHTML);
    console.log(Temperature);
    console.log(WindSpeed);
    
    var answer = windChill(Temperature, WindSpeed);
    document.getElementById('windChillOutput').innerHTML = "Wind Chill:  " + answer;
   
}

function windChill(tempF, speed) {
    var wc = "N/A";
    if (tempF < 50 & speed > 4.8) {
        wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.pow(speed, .16));
        console.log(wc);
        console.log(tempF);
        console.log(speed);
        wc = fixed(2).wc;
    }   
    return wc;
    
}