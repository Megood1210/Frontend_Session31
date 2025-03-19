const text = document.querySelector("#text");
const hide = document.querySelector("#hide");
const show = document.querySelector("#show");

hide.addEventListener('click', function() {
    text.style.display = "none";
});

show.addEventListener('click', function() {
    text.style.display = "block";
});

