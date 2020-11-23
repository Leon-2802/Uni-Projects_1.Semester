//Werte Afrika
var afrika2018 = 1235.5;
var afrika2008 = 1028;
//Werte Südamerika
var sa2018 = 1261.5;
var sa2008 = 1132.6;
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
//Berechnungen:
var emissionenGesamt = afrika2018 + sa2018 + euro2018 + na2018 + asien2018 + austr2018;
//Afrika
var prozentAfrikaGes = ((afrika2018 / emissionenGesamt) * 100).toFixed(1); //.toFixed(1) rundet die Zahl auf nur 1 Dezimalen ab.
var prozentAfrikaVergl = (((afrika2018 / afrika2008) - 1) * 100).toFixed(1);
var wertAfrikaVergl = (afrika2018 - afrika2008).toFixed(1);
//Südamerika
var prozentSaGes = ((sa2018 / emissionenGesamt) * 100).toFixed(1);
var prozentSaVergl = (((sa2018 / sa2008) - 1) * 100).toFixed(1);
var wertSaVergl = (sa2018 - sa2008).toFixed(1);
//Europa
var prozentEuroGes = ((euro2018 / emissionenGesamt) * 100).toFixed(1);
var prozentEuroVergl = (((euro2018 / euro2008) - 1) * 100).toFixed(1);
var wertEuroVergl = (euro2018 - euro2008).toFixed(1);
//Nordamerika
var prozentNaGes = ((na2018 / emissionenGesamt) * 100).toFixed(1);
var prozentNaVergl = (((na2018 / na2008) - 1) * 100).toFixed(1);
var wertNaVergl = (na2018 - na2008).toFixed(1);
//Asien
var prozentAsienGes = ((asien2018 / emissionenGesamt) * 100).toFixed(1);
var prozentAsienVergl = (((asien2018 / asien2008) - 1) * 100).toFixed(1);
var wertAsienVergl = (asien2018 - asien2008).toFixed(1);
//Australien
var prozentAustrGes = ((austr2018 / emissionenGesamt) * 100).toFixed(1);
var prozentAustrVergl = (((austr2018 / austr2008) - 1) * 100).toFixed(1);
var wertAustrVergl = (austr2018 - austr2008).toFixed(1);
//Event und Function Europa:
function europe() {
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector("#h2-1").innerHTML = euro2018;
    document.querySelector("#h2-2").innerHTML = prozentEuroGes + "%";
    document.querySelector("#h2-3").innerHTML = prozentEuroVergl + "%";
    document.querySelector("#h2-4").innerHTML = wertEuroVergl;
    document.querySelector("#section1-p").innerHTML = "Emission absolute of Europe in 2018";
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", europe);
});
//Event und Function Nordamerika:
function northAmerica() {
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector("#h2-1").innerHTML = na2018;
    document.querySelector("#h2-2").innerHTML = prozentNaGes + "%";
    document.querySelector("#h2-3").innerHTML = prozentNaVergl + "%";
    document.querySelector("#h2-4").innerHTML = wertNaVergl;
    document.querySelector("#section1-p").innerHTML = "Emission absolute of North America in 2018";
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", northAmerica);
});
//Function und Event Südamerika:
function southAmerica() {
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector("#h2-1").innerHTML = sa2018;
    document.querySelector("#h2-2").innerHTML = prozentSaGes + "%";
    document.querySelector("#h2-3").innerHTML = prozentSaVergl + "%";
    document.querySelector("#h2-4").innerHTML = wertSaVergl;
    document.querySelector("#section1-p").innerHTML = "Emission absolute of South America in 2018";
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", southAmerica);
});
//Function und Event Afrika:
function africa() {
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector("#h2-1").innerHTML = afrika2018;
    document.querySelector("#h2-2").innerHTML = prozentAfrikaGes + "%";
    document.querySelector("#h2-3").innerHTML = prozentAfrikaVergl + "%";
    document.querySelector("#h2-4").innerHTML = wertAfrikaVergl;
    document.querySelector("#section1-p").innerHTML = "Emission absolute of Africa in 2018";
}
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", africa);
});
//Function und Event Asien:
function asia() {
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector("#h2-1").innerHTML = asien2018;
    document.querySelector("#h2-2").innerHTML = prozentAsienGes + "%";
    document.querySelector("#h2-3").innerHTML = prozentAsienVergl + "%";
    document.querySelector("#h2-4").innerHTML = wertAsienVergl;
    document.querySelector("#section1-p").innerHTML = "Emission absolute of Asia in 2018";
}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", asia);
});
//Function und Event Australien:
function australia() {
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector("#h2-1").innerHTML = austr2018;
    document.querySelector("#h2-2").innerHTML = prozentAustrGes + "%";
    document.querySelector("#h2-3").innerHTML = prozentAustrVergl + "%";
    document.querySelector("#h2-4").innerHTML = wertAustrVergl;
    document.querySelector("#section1-p").innerHTML = "Emission absolute of Australia in 2018";
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", australia);
});
//# sourceMappingURL=emission2.js.map