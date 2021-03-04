let sounds = [];
sounds[0] = new Audio('./L07/task_material/assets/A.mp3');
sounds[1] = new Audio('L07/task_material/assets/C.mp3');
sounds[2] = new Audio('./L07/task_material/assets/F.mp3');
sounds[3] = new Audio('./L07/task_material/assets/G.mp3');
sounds[4] = new Audio('./L07/task_material/assets/hihat.mp3');
sounds[5] = new Audio('./L07/task_material/assets/kick.mp3');
sounds[6] = new Audio('./L07/task_material/assets/laugh-1.mp3');
sounds[7] = new Audio('./L07/task_material/assets/laugh-2.mp3');
sounds[8] = new Audio('./L07/task_material/assets/snare.mp3');

//selectors:
document.querySelector("#drum1").addEventListener("click", function () {
        playSample(0);
});

document.querySelector("#drum2").addEventListener("click", function () {
    playSample(1);
});

document.querySelector("#drum3").addEventListener("click", function () {
    playSample(2);
});

document.querySelector("#drum4").addEventListener("click", function () {
    playSample(3);
});

document.querySelector("#drum5").addEventListener("click", function () {
    playSample(4);
});

document.querySelector("#drum6").addEventListener("click", function () {
    playSample(5);
});

document.querySelector("#drum7").addEventListener("click", function () {
    playSample(6);
});

document.querySelector("#drum8").addEventListener("click", function () {
    playSample(7);
});

document.querySelector("#drum9").addEventListener("click", function () {
    playSample(8);
});

//function manual play:
function playSample(x :number) {
    sounds[x].play();
}

//Beat-Array:
let beat = [];
beat[0] = new Audio('./L07/task_material/assets/kick.mp3');
beat[1] = new Audio('./L07/task_material/assets/snare.mp3');
beat[2] = new Audio('./L07/task_material/assets/hihat.mp3');

let myIntervall;

document.querySelector('#play-button').addEventListener("click", function () {
    definedBeat();
});

//function beat:
function definedBeat() {
    beat[0].play();
    beat[1].play();
    beat[2].play();
    //Intervall zwischen den Sounds definiert:
    myIntervall = setInterval(definedBeat, 500);
}