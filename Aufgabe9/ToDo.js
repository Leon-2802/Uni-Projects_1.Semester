var circle = document.getElementById("circle");
var checkMark = document.getElementById("check");
circle.addEventListener("click", function () {
    toggleClasses(circle, checkMark);
});
checkMark.addEventListener("click", function () {
    toggleClasses(checkMark, circle);
});
function toggleClasses(firstHtmlElement, secondHtmlElement) {
    firstHtmlElement.classList.add("hidden");
    secondHtmlElement.classList.remove("hidden");
}
//# sourceMappingURL=ToDo.js.map