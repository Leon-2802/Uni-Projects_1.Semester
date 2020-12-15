var zaehler: number = 0;
var userTask: any = document.getElementById("new-task");

document.addEventListener("keydown", function(event: KeyboardEvent): void { //Löst "CreateTask" function aus
    if (event.keyCode == 13) {
            createTask();
    }
});

//Tasks als erledigt markieren: ?

function createTask (): void {

    //Elemente jeder Task, die hinzugefügt werden müssen:
    let container: HTMLDivElement = document.createElement("div");
    let icon1: HTMLElement = document.createElement("i");
    icon1.className = "far fa-circle";
    let icon2: HTMLElement = document.createElement("i");
    icon2.className = "far fa-check-circle isHidden";
    let text: HTMLSpanElement = document.createElement("span");
    text.innerHTML = userTask.value;
    let icon3: HTMLElement = document.createElement("i");
    icon3.className = "fas fa-trash-alt";

    //Neue HTML Elemente werden in den Body/Container eingefügt
    document.body.appendChild(container);
    container.appendChild(icon1);
    container.appendChild(icon2);
    container.appendChild(text);
    container.appendChild(icon3);

    //Task-Zähler wird erhöht und die counter Funktion aktualisiert
    zaehler++;
    counter();

    //Kreis-, Abhaken- und Lösch-Button Event Listener mit jeweiliger Funktion
    icon1.addEventListener("click", function(): void {
        icon1.classList.add("isHidden");
        icon2.classList.remove("isHidden");
    });

    icon2.addEventListener("click", function(): void {
        icon2.classList.add("isHidden");
        icon1.classList.remove("isHidden");
    });

    icon3.addEventListener("click", function(): void {
        document.body.removeChild(container);
        zaehler--;
        counter();
    });
}

function counter(): void {
    document.querySelector("#counter").innerHTML = zaehler + " tasks are";
}