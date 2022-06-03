let toggleMode = document.getElementById("toggle-icon");


function toggler() {
    let change = document.body;
    let container = document.querySelector(".container-sm");
    let darkBtn = document.querySelectorAll(".btn");
    let darkKeyboard = document.getElementById("keyboard");
    let diffColor = document.querySelectorAll(".diff-color");
    let firstRow = document.querySelector(".row");



    change.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode-container");
    darkKeyboard.classList.toggle("dark-mode-keyboard");
    darkBtn.forEach(button => {
        button.classList.toggle("dark-mode-btn");
    });
    diffColor.forEach(color => {
        color.classList.toggle("diff-color-dark-mode-btn");
    });

    if (change.classList.contains("dark-mode")) {
        toggleMode.src = "./icons/icons8-sun.svg";
        darkKeyboard.style.backgroundColor = "rgb(35, 35, 35)";
        firstRow.style.backgroundColor = "rgb(35, 35, 35)";
    } else {
        toggleMode.src = "/icons/PngItem_629144.png";
        toggleMode.classList.remove("fa-moon");
        toggleMode.classList.add("fa-sun")
        darkKeyboard.style.backgroundColor = "white";
        firstRow.style.backgroundColor = "white";
    }
}