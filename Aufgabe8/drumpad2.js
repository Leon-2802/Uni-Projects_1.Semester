//sounds:
var sounds = [];
sounds[0] = new Audio("./L08/task_material/assets/A.wav");
sounds[1] = new Audio("./L08/task_material/assets/B.wav");
sounds[2] = new Audio("./L08/task_material/assets/bass.wav");
sounds[3] = new Audio("./L08/task_material/assets/guitar.mp3");
sounds[4] = new Audio("./L08/task_material/assets/8081.wav");
sounds[5] = new Audio("./L08/task_material/assets/kick.mp3");
sounds[6] = new Audio("./L08/task_material/assets/8082.wav");
sounds[7] = new Audio("./L08/task_material/assets/8083.wav");
sounds[8] = new Audio("./L08/task_material/assets/snare.mp3");
//HTML-Elemente:
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var deleteButton = document.getElementById("delete");
var recordButtonBlack = document.getElementById("record-black");
var recordButtonRed = document.getElementById("record-red");
var questionMark = document.getElementById("question-mark");
var closeButton = document.getElementById("close");
var i = 0;
//boolean-switches:
var boolRecord = false;
var boolPlayStop = false;
// Drumpad-Buttons:
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 49:
            playSample(0);
            recordABeat(0);
            break;
        case 50:
            playSample(1);
            recordABeat(1);
            break;
        case 51:
            playSample(2);
            recordABeat(2);
            break;
        case 52:
            playSample(3);
            recordABeat(3);
            break;
        case 53:
            playSample(4);
            recordABeat(4);
            break;
        case 54:
            playSample(5);
            recordABeat(5);
            break;
        case 55:
            playSample(6);
            recordABeat(6);
            break;
        case 56:
            playSample(7);
            recordABeat(7);
            break;
        case 57:
            playSample(8);
            recordABeat(8);
            break;
        case 81:
            playStopKeyboard();
            break;
        case 87:
            recordKeyboard();
            break;
        case 69:
            beatArray.length = 0;
            deleteButton.setAttribute("style", "color: " + "#ff6666");
            resetColor = setTimeout(function () {
                deleteButton.setAttribute("style", "color: " + "black");
            }, 800);
            break;
    }
});
document.querySelector("#drum1").addEventListener("click", function () {
    playSample(0);
    recordABeat(0);
});
document.querySelector("#drum2").addEventListener("click", function () {
    playSample(1);
    recordABeat(1);
});
document.querySelector("#drum3").addEventListener("click", function () {
    playSample(2);
    recordABeat(2);
});
document.querySelector("#drum4").addEventListener("click", function () {
    playSample(3);
    recordABeat(3);
});
document.querySelector("#drum5").addEventListener("click", function () {
    playSample(4);
    recordABeat(4);
});
document.querySelector("#drum6").addEventListener("click", function () {
    playSample(5);
    recordABeat(5);
});
document.querySelector("#drum7").addEventListener("click", function () {
    playSample(6);
    recordABeat(6);
});
document.querySelector("#drum8").addEventListener("click", function () {
    playSample(7);
    recordABeat(7);
});
document.querySelector("#drum9").addEventListener("click", function () {
    playSample(8);
    recordABeat(8);
});
//play/stop-Button:
playButton.addEventListener("click", function () {
    toggleClasses(this, stopButton);
    boolPlayStop = true;
    checkBeat();
});
stopButton.addEventListener("click", function () {
    toggleClasses(this, playButton);
    boolPlayStop = false;
    checkBeat();
});
//Lösch-Button:
var resetColor;
deleteButton.addEventListener("click", function () {
    beatArray.length = 0;
    deleteButton.setAttribute("style", "color: " + "#ff6666");
    resetColor = setTimeout(function () {
        deleteButton.setAttribute("style", "color: " + "black");
    }, 800);
});
//Aufnahme-Button:
recordButtonBlack.addEventListener("click", function () {
    toggleClasses(this, recordButtonRed);
    boolRecord = true;
});
recordButtonRed.addEventListener("click", function () {
    toggleClasses(this, recordButtonBlack);
    boolRecord = false;
});
//Erklär-Text:
questionMark.addEventListener("click", function () {
    toggleClasses(this, closeButton);
    document.querySelector("#text1").classList.remove("isHidden");
    document.querySelector("#text2").classList.remove("isHidden");
    document.querySelector("#text3").classList.remove("isHidden");
});
closeButton.addEventListener("click", function () {
    toggleClasses(this, questionMark);
    document.querySelector("#text1").classList.add("isHidden");
    document.querySelector("#text2").classList.add("isHidden");
    document.querySelector("#text3").classList.add("isHidden");
});
//Manipulierbares Array (Default-Beat):
var beatArray = [];
beatArray[0] = 5;
beatArray[1] = 4;
beatArray[2] = 8;
//Funktionen
//Wiederverwendbare Play-Function:
function playSample(x) {
    sounds[x].play();
}
//Beat Start/Stop:
var beatInterval;
function checkBeat() {
    if (boolPlayStop == true) {
        beatInterval = setInterval(function () {
            if (i < beatArray.length) {
                playSample(beatArray[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 200);
    }
    else {
        clearInterval(beatInterval);
    }
}
//Beat aufnehmen:
function recordABeat(x) {
    if (boolRecord == true) {
        beatArray.unshift(x);
    }
}
//Toggle Classes:
function toggleClasses(firstHtmlElement, secondHtmlElement) {
    firstHtmlElement.classList.add("isHidden");
    secondHtmlElement.classList.remove("isHidden");
}
//Play-Stop-Button Keyboard:
function playStopKeyboard() {
    if (boolPlayStop == false) {
        toggleClasses(playButton, stopButton);
        boolPlayStop = true;
        checkBeat();
    }
    else if (boolPlayStop == true) {
        toggleClasses(stopButton, playButton);
        boolPlayStop = false;
        checkBeat();
    }
}
//Record Button Keyboard:
function recordKeyboard() {
    if (boolRecord == false) {
        toggleClasses(recordButtonBlack, recordButtonRed);
        boolRecord = true;
    }
    else if (boolRecord == true) {
        toggleClasses(recordButtonRed, recordButtonBlack);
        boolRecord = false;
    }
}
//# sourceMappingURL=drumpad2.js.map