let color = "#000000";
let dimensions = 16;
let eraserActive = false;
let rainbowIsActive = false;


let colorText = document.querySelector(".options-color p");
let rainbowCheckbox = document.querySelector("#rainbow");
let rainbowLabel = document.querySelector(".rainbow-label");
let slider = document.querySelector("#grid-dimensions");
let sliderText = document.querySelector(".grid-dimensions-label");
let eraserIcon = document.querySelector(".eraser");
let colorPicker = document.querySelector("#color-picker");
let canvas = document.querySelector(".canvas");

sliderText.textContent = dimensions + "";
drawGrid(dimensions);

//make color text dimmer when rainbow option is toggled
function toggleRainbowOption() {
    if (rainbowCheckbox.checked) {
        rainbowIsActive = true;
        colorText.style.color = "grey";
        rainbowLabel.style["font-weight"] = "bold";
    }
    else {
        rainbowIsActive = false;
        colorText.style.color = "white";
        rainbowLabel.style["font-weight"] = "normal";
    }
}

//make the eraser image white when cliked
function toggleEraser() {
    if (eraserActive) {
        eraserActive = false;
        eraserIcon.src = "./assets/eraser.png";
    }
    else {
        eraserActive = true;
        eraserIcon.src = "./assets/eraser-white.png";
    }
}

//get the color the user picker from the color picker
function getColor() {
    color = colorPicker.value;
}

//change the value of the slider text when slider is moved
function changeSliderValue() {
    dimensions = slider.value;
    sliderText.textContent = dimensions + "";
    drawGrid(dimensions);
}

function drawGrid(dimensions) {
    removePreviousDivs();

    let currentHorizontalDiv;
    let currentVerticalDiv;
    for (let i = 0; i <= dimensions - 1; i++) {
        currentHorizontalDiv = createGridDiv();
        canvas.appendChild(currentHorizontalDiv);
        for (let j = 0; j <= dimensions - 1; j++) {
            currentVerticalDiv = createGridDiv();
            currentHorizontalDiv.appendChild(currentVerticalDiv);
        }
    }
}

function createGridDiv() {
    let gridDiv = document.createElement("div");
    gridDiv.style.display = "flex";
    gridDiv.style.flex = "1";
    gridDiv.style.border = "2px solid";
    gridDiv.addEventListener("mousedown", (e) => {
        drawColor(color, eraserActive, rainbowIsActive, e.target);
    });
    return gridDiv;
}

function removePreviousDivs() {
    let gridDivs = document.querySelectorAll(".canvas div");
    gridDivs.forEach((gridDiv) => {
        gridDiv.remove();
    })
}

function drawColor(color, eraserActive, rainbowIsActive, gridDiv) {
    eraserActive ? color = "#FFFFFF" : color = color;
    rainbowIsActive ? color = generateRandomColor() : color = color;

    gridDiv.style["background-color"] = color;
}


function generateRandomColor() {
    let randomColor = "#";
    let temp;
    for (let i = 0; i <= 5; i++) {
        temp = Math.floor(Math.random() * 15);
        switch (temp) {
            case 0:
                randomColor += "0";
                break;
            case 1:
                randomColor += "1";
                break;
            case 2:
                randomColor += "1";
                break;
            case 3:
                randomColor += "1";
                break;
            case 4:
                randomColor += "1";
                break;
            case 5:
                randomColor += "1";
                break;
            case 6:
                randomColor += "1";
                break;
            case 7:
                randomColor += "1";
                break;
            case 8:
                randomColor += "1";
                break;
            case 9:
                randomColor += "1";
                break;
            case 10:
                randomColor += "A";
                break;
            case 11:
                randomColor += "B";
                break;
            case 12:
                randomColor += "C";
                break;
            case 13:
                randomColor += "D";
                break;
            case 14:
                randomColor += "E";
                break;
            case 15:
                randomColor += "F";
                break;
        }
    }

    return randomColor;
}


rainbowCheckbox.addEventListener("change", toggleRainbowOption)
slider.addEventListener("input", changeSliderValue)
eraserIcon.addEventListener("click", toggleEraser)
colorPicker.addEventListener("input", getColor);