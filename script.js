/**
 * Here are the list of things that i want to achieve:
 * --------------------------------options section functionality---------------------------------------------
 * TODO(1): make it so that when i toggle the "rainbow" the text "color: " becomes dimmer
 * TODO(2): make it so that moving the slider change the number besides it
 * TODO(3): make it so that clicking on or off the eraser or the delete button changes its color
 * 
 * -------------------------------canvas section functionality-----------------------------------------------
 * The canvas will need from the options section the following:
 *      A) the color (erase is eqv. to color=white)
 *      B) the dimensions
 * TODO(4): make it so that whenever the user changes the color a variable named color changes, and if
 *          the user chooses the erase option, make color = white
 * TODO(5): make it so that whenever the user moves the slider, the grid is re-drawn
 * TODO(6): the default value for color is "#000000" and for dimensions is 16
 * TODO(7): make it so that whenever the user clicks the delete button, all the bgd colors of the grids are white
 */

let color = "#000000";
let dimensions = 16;
let eraserActive = false;

let colorText = document.querySelector(".options-color p");
let rainbowCheckbox = document.querySelector("#rainbow");
let rainbowLabel = document.querySelector(".rainbow-label");

//make color text dimmer when rainbow option is toggled
rainbowCheckbox.addEventListener("change", () => {
    if(rainbowCheckbox.checked)
    {
        colorText.style.color = "grey";
        rainbowLabel.style["font-weight"] = "bold";
    }
    else{
        colorText.style.color = "white";
        rainbowLabel.style["font-weight"] = "normal";
    }
})

//change the value of the slider text when slider is moved
let slider = document.querySelector("#grid-dimensions");
let sliderText = document.querySelector(".grid-dimensions-label");

sliderText.textContent = "16" // setting default value

slider.addEventListener("input", () => {
    sliderText.textContent = slider.value;
})

//make the eraser image white when cliked
let eraserIcon = document.querySelector(".eraser");

eraserIcon.addEventListener("click", () => {
    if(eraserActive)
    {
        eraserActive = false;
        eraserIcon.src = "./assets/eraser.png";
    }
    else{
        eraserActive = true;
        eraserIcon.src = "./assets/eraser-white.png";
    }
})