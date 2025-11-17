// °C
let temperature = 18
// km/h
let wind = 12

function calculateWindChill(wind, temperature) {
    const windChill = 13.12 + 
                      (0.6215 * temperature) - 
                      (11.37 * Math.pow(wind, 0.16)) + 
                      (0.3965 * temperature * Math.pow(wind, 0.16));
    
    return Math.round(windChill * 10) / 10;
}

// only calculate windchill if:
if (temperature <= 10 && wind > 4.8){
    document.getElementById("windchill").innerHTML = `${calculateWindChill(wind, temperature)} °C`;
} else {
    document.getElementById("windchill").innerHTML = "N/A"
}