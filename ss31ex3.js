const background = document.querySelector(".container");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const purple = document.querySelector(".purple");
red.addEventListener("click", function () { 
    background.style.background = "red";
});
green.addEventListener("click", function () { 
    background.style.background = "green";
});
purple.addEventListener("click", function () { 
    background.style.background = "purple";
});
