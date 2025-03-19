const modal = document.getElementById("modal");
const openBtn = document.getElementById("btn");
const closeBtn = document.querySelector(".close");
openBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

