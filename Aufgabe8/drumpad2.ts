//sounds:
let sounds: any = [];
sounds[0] = new Audio("./L08/task_material/assets/A.mp3");
sounds[1] = new Audio("./L08/task_material/assets/C.mp3");
sounds[2] = new Audio("./L08/task_material/assets/F.mp3");
sounds[3] = new Audio("./L08/task_material/assets/G.mp3");
sounds[4] = new Audio("./L08/task_material/assets/hihat.mp3");
sounds[5] = new Audio("./L08/task_material/assets/kick.mp3");
sounds[6] = new Audio("./L08/task_material/assets/laugh-1.mp3");
sounds[7] = new Audio("./L08/task_material/assets/laugh-2.mp3");
sounds[8] = new Audio("./L08/task_material/assets/snare.mp3");

//HTML-Elemente:
const playButton: HTMLElement = document.getElementById("play");
const stopButton: HTMLElement = document.getElementById("stop");
const deleteButton: HTMLElement = document.getElementById("delete");
const recordButtonBlack: HTMLElement = document.getElementById("record-black");
const recordButtonRed: HTMLElement = document.getElementById("record-red");

//boolean-switches:
let boolRecord: boolean = false;

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
    const beatInterval = setInterval(function(): void {
        playSample(beatArray[0]);
        playSample(beatArray[1]);
        playSample(beatArray[2]);
        }, 200);
});

stopButton.addEventListener("click", function (): void {
    toggleClasses(this, playButton);
    stopBeat();
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

//Beat stoppen (Seite neu laden):
function stopBeat(): void {
    window.location.reload(false);
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