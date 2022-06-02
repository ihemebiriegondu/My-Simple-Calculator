let toggleMode = document.getElementById("toggle-icon");


function toggler() {
    let change = document.body;
    let darkBtn = document.querySelectorAll(".btn");
    let darkKeyboard = document.getElementById("keyboard");
    let diffColor = document.querySelectorAll(".diff-color");
    let firstRow = document.querySelector(".row");



    change.classList.toggle("dark-mode");
    darkBtn.forEach(button => {
        button.classList.toggle("dark-mode-btn");
    });
    diffColor.forEach(color => {
        color.classList.toggle("diff-color-dark-mode-btn");
    });

    if (change.classList.contains("dark-mode")) {
        toggleMode.classList.add("fa-sun");
        darkKeyboard.style.backgroundColor = "rgb(35, 35, 35)";
        firstRow.style.backgroundColor = "rgb(35, 35, 35)";
    } else {
        toggleMode.classList.remove("fa-moon");
        toggleMode.classList.add("fa-sun")
        darkKeyboard.style.backgroundColor = "white";
        firstRow.style.backgroundColor = "white";
    }
}