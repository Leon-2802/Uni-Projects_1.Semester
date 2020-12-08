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

//boolean-switches:
let bool1: boolean = false;

// Drumpad-Buttons:
document.querySelector("#drum1").addEventListener("click", function (): void {
        playSample(0);
});

document.querySelector("#drum2").addEventListener("click", function (): void {
    playSample(1);
});

document.querySelector("#drum3").addEventListener("click", function (): void {
    playSample(2);
});

document.querySelector("#drum4").addEventListener("click", function (): void {
    playSample(3);
});

document.querySelector("#drum5").addEventListener("click", function (): void {
    playSample(4);
});

document.querySelector("#drum6").addEventListener("click", function (): void {
    playSample(5);
});

document.querySelector("#drum7").addEventListener("click", function (): void {
    playSample(6);
});

document.querySelector("#drum8").addEventListener("click", function (): void {
    playSample(7);
});

document.querySelector("#drum9").addEventListener("click", function (): void {
    playSample(8);
}); 

//play/stop-Button:
playButton.addEventListener("click", function (): void {
    toggleClasses(this, stopButton);
    bool1 = true;
    console.log(bool1);
    playSample(beatArray[1]);
    playSample(beatArray[2]);
    playSample(beatArray[3]);
});

stopButton.addEventListener("click", function (): void {
    toggleClasses(this, playButton);
    while (bool1 == true) {
        bool1 = false;
    }
    console.log(bool1);
});

//Manipulierbares Array:
let beatArray: number [] = [];
beatArray[1] = 5;
beatArray[2] = 4;
beatArray[3] = 8;

//Funktionen
//Wiederverwendbare Play-Function:
function playSample(x: number): void {
    sounds[x].play();
}

//Toggle Classes:
function toggleClasses(firstHtmlElement: HTMLElement, secondHtmlElement: HTMLElement): void {
    firstHtmlElement.classList.add("isHidden");
    secondHtmlElement.classList.remove("isHidden");
}
