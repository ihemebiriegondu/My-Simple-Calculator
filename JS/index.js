let toggleMode = document.getElementById("toggle-icon");
let btnMode = document.querySelector(".btn");



function toggler() {
    var change = document.body;
    var darkBtn = document.querySelector(".btn")

    change.classList.toggle("dark-mode");
    darkBtn.classList.toggle("dark-mode");
}