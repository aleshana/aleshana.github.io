/* Weather Wind chill Factor Calculations
Wind chill = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)
*/

function doInputOutput() {  
        
    var tempF = parseFloat(document.getElementById('temperature').innerHTML);
    var speed = parseFloat(document.getElementById('windSpeed').innerHTML);

    if (tempF < 50 & speed > 4.8) {
        var wc = 35.74 + (0.6215 * tempF) - (35.75 * ( Math.pow(speed, .16))) + (.4275 * tempF) * (Math.pow(speed, .16));
        console.log(wc);
        console.log(tempF);
        console.log(speed);
        document.getElementById('windChillOutput').innerHTML = "Wind Chill:  " + wc.toFixed(0) + " &#8457;";
    }   
}
