let toggleMode = document.getElementById("toggle-icon");


function toggler() {
    let change = document.body;
    let container = document.querySelector(".container-sm");
    let darkBtn = document.querySelectorAll(".btn");
    let darkKeyboard = document.getElementById("keyboard");
    let diffColor = document.querySelectorAll(".diff-color");
    let firstRow = document.querySelector(".row");
    let display = document.getElementById("display");



    change.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode-container");
    darkKeyboard.classList.toggle("dark-mode-keyboard");
    display.classList.toggle("dark-mode-display");
    darkBtn.forEach(button => {
        button.classList.toggle("dark-mode-btn");
    });
    diffColor.forEach(color => {
        color.classList.toggle("diff-color-dark-mode-btn");
    });

    if (change.classList.contains("dark-mode")) {
        darkKeyboard.style.backgroundColor = "rgb(35, 35, 35)";
        firstRow.style.backgroundColor = "rgb(35, 35, 35)";
    } else {
        darkKeyboard.style.backgroundColor = "white";
        firstRow.style.backgroundColor = "white";
    }
}