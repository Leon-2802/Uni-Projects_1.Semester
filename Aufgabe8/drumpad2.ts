//sounds:
let sounds: HTMLAudioElement[] = [];
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
const playButton: HTMLElement = document.getElementById("play");
const stopButton: HTMLElement = document.getElementById("stop");
const deleteButton: HTMLElement = document.getElementById("delete");
const recordButtonBlack: HTMLElement = document.getElementById("record-black");
const recordButtonRed: HTMLElement = document.getElementById("record-red");
const questionMark: HTMLElement = document.getElementById("question-mark");
const closeButton: HTMLElement = document.getElementById("close");

let i: number = 0;

//boolean-switches:
let boolRecord: boolean = false;
let boolPlayStop: boolean = false;

// Drumpad-Buttons:
document.querySelector("#drum1").addEventListener("click", function (): void {
    playSample(0);
    recordABeat(0);
});

document.querySelector("#drum2").addEventListener("click", function (): void {
    playSample(1);
    recordABeat(1);
});

document.querySelector("#drum3").addEventListener("click", function (): void {
    playSample(2);
    recordABeat(2);
});

document.querySelector("#drum4").addEventListener("click", function (): void {
    playSample(3);
    recordABeat(3);
});

document.querySelector("#drum5").addEventListener("click", function (): void {
    playSample(4);
    recordABeat(4);
});

document.querySelector("#drum6").addEventListener("click", function (): void {
    playSample(5);
    recordABeat(5);
});

document.querySelector("#drum7").addEventListener("click", function (): void {
    playSample(6);
    recordABeat(6);
});

document.querySelector("#drum8").addEventListener("click", function (): void {
    playSample(7);
    recordABeat(7);
});

document.querySelector("#drum9").addEventListener("click", function (): void {
    playSample(8);
    recordABeat(8);
}); 

//play/stop-Button:
playButton.addEventListener("click", function (): void {
    toggleClasses(this, stopButton);
    boolPlayStop = true;
    checkBeat();
});

stopButton.addEventListener("click", function (): void {
    toggleClasses(this, playButton);
    boolPlayStop = false;
    checkBeat();
});

//Lösch-Button:
deleteButton.addEventListener("click", function(): void {
    beatArray.length = 0;
});

//Aufnahme-Button:
recordButtonBlack.addEventListener("click", function(): void{
    toggleClasses(this, recordButtonRed);
    boolRecord = true;
});
recordButtonRed.addEventListener("click", function(): void{
    toggleClasses(this, recordButtonBlack);
    boolRecord = false;
});

//Erklär-Text:
questionMark.addEventListener("click", function(): void {
    toggleClasses(this, closeButton);
    document.querySelector("#text1").classList.remove("isHidden");
    document.querySelector("#text2").classList.remove("isHidden");
    document.querySelector("#text3").classList.remove("isHidden");
});
closeButton.addEventListener("click", function(): void {
    toggleClasses(this, questionMark);
    document.querySelector("#text1").classList.add("isHidden");
    document.querySelector("#text2").classList.add("isHidden");
    document.querySelector("#text3").classList.add("isHidden");
});

//Manipulierbares Array (Default-Beat):
let beatArray: number [] = [];
beatArray[0] = 5;
beatArray[1] = 4;
beatArray[2] = 8;

//Funktionen
//Wiederverwendbare Play-Function:
function playSample(x: number): void {
        sounds[x].play();
}

//Beat Start/Stop:
var beatInterval: number;

function checkBeat(): void {
    if (boolPlayStop == true) {
        beatInterval = setInterval( function(): void {
            if (i < beatArray.length) {
                playSample(beatArray[i]);
                i++;
            } else {
                i = 0;
            }
        }, 200);

    } else {
        clearInterval(beatInterval);
    }
}

//Beat aufnehmen:
function recordABeat(x: number): void {
    if (boolRecord == true) {
        beatArray.unshift(x);
    }
}

//Toggle Classes:
function toggleClasses(firstHtmlElement: HTMLElement, secondHtmlElement: HTMLElement): void {
    firstHtmlElement.classList.add("isHidden");
    secondHtmlElement.classList.remove("isHidden");
}