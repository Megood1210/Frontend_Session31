const tittle = document.querySelector("#title");
const text = document.querySelector("#text");
const button = document.querySelector("#switch");
const background = document.querySelector("#container");
button.addEventListener("click", function () {
    if (background.style.background === "black") {
        text.style.color = "black";
        background.style.background = "white";
        title.style.color = "black";
    } else {
        text.style.color = "white";
        background.style.background = "black";
        title.style.color = "white";
    }
});
