let circle: HTMLElement = document.getElementById("circle");
let checkMark: HTMLElement = document.getElementById("check");

circle.addEventListener("click", function(): void {
    toggleClasses(circle, checkMark);
});
checkMark.addEventListener("click", function(): void {
    toggleClasses(checkMark, circle);
});

function toggleClasses(firstHtmlElement: HTMLElement, secondHtmlElement: HTMLElement): void {
    firstHtmlElement.classList.add("hidden");
    secondHtmlElement.classList.remove("hidden");
}