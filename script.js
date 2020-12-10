var h3 = document.querySelector("h3");
var col1 = document.querySelector("#color1");
var col2 = document.querySelector("#color2");
var body = document.querySelector("body");
var randomize = document.querySelector("#randomize");

setGradient();

col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient);

randomize.addEventListener("click", generateRandomGradient);

function setGradient(){

    body.style.background = 
    "linear-gradient(to right, "
    + col1.value 
    + ", "
    + col2.value 
    + ")";
    h3.textContent = body.style.background;
}

function generateRandomGradient(){
   col1.value = generateRandomColor();
   col2.value = generateRandomColor();
   setGradient();
}

function generateRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

