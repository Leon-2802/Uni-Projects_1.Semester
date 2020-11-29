//Werte Afrika
var afrika2018 : number = 1235.5;
var afrika2008 = 1028;
//Werte Südamerika
var sa2018 : number = 1261.5;
var sa2008 : number = 1132.6;
//Werte Europa
var euro2018 = 4209.3;
var euro2008 = 4965.7;
//Werte Nordamerika
var na2018 = 6035.6;
var na2008 = 6600.4;
//Werte Asien
var asien2018 = 16274.1;
var asien2008 = 12954.7;
//Werte Australien
var austr2018 = 2100.5;
var austr2008 = 1993;
//Emissionen Gesamt:
var emissionenGesamt = afrika2018 + sa2018 + euro2018 + na2018 + asien2018 + austr2018;

//Event-Listener und Dom-Manipulation:
//Europa
window.addEventListener('load', function() {
    document.querySelector(".europe").addEventListener("click", function() {
        reusableFunction("Europe", euro2018, euro2008); 
    });
});
//Nordamerika
window.addEventListener('load', function() {
    document.querySelector(".northamerica").addEventListener("click", function() {
        reusableFunction("North America", na2018, na2008);
    });
});
//Südamerika
window.addEventListener('load', function() {
    document.querySelector(".southamerica").addEventListener("click", function() {
        reusableFunction("South America", sa2018, sa2008);
    });
});
//Afrika
window.addEventListener('load', function() {
    document.querySelector(".africa").addEventListener("click", function() {
        reusableFunction("Africa", afrika2018, afrika2008);
    });
});
//Asien
window.addEventListener('load', function() {
    document.querySelector(".asia").addEventListener("click", function() {
        reusableFunction("Asia", asien2018, asien2008);
    });
});
//Australien
window.addEventListener('load', function() {
    document.querySelector(".australia").addEventListener("click", function() {
        reusableFunction("Australia", austr2018, austr2008);
    });
});

//Wiederverwendbare Funktion:
function reusableFunction(continent, continent2018, continent2008) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#titleRegion2").innerHTML = continent;
    document.querySelector("#absolute2018").innerHTML = continent2018 + "kg CO2";
    document.querySelector("#relative-percent").innerHTML = ((continent2018 / emissionenGesamt) * 100).toFixed(1) + "%";
    document.querySelector("#growth-rate").innerHTML = (((continent2018 / continent2008) - 1) * 100).toFixed(1) + "%";
    document.querySelector("#rate-absolute").innerHTML = (continent2018 - continent2008).toFixed(1) + "kg CO2";
    //Diagramm-Anpassung:
    document.querySelector('.chart2').setAttribute('style', 'height:' + ((continent2018 / emissionenGesamt) * 100) + '%');
    document.querySelector('.chart1').setAttribute('style', 'height:' + (((continent2018 / continent2008) - 1) * 100) + '%');
}
