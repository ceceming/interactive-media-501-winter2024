//Printing Message to console
console.log("testing to see of the JS is linked to the html file");

//Variables selecting color circles
const greenCircle = document.getElementById("green");
const plumCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
const interactionContainer = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function () {
    console.log("Green circle is clicked");
    interactionContainer.style.backgroundColor = "lightgreen";
})

plumCircle.addEventListener("click", function () {
    console.log("Plum circle is clicked");
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function () {
    console.log("Blue circle is clicked");
    interactionContainer.style.backgroundColor = "lightblue";
})

/*
Loop Task
1. Select container
2. Declare message variable and assign text
3. For loop
*/

const loopContainer = document.getElementById("loopContainer");
const message = "fun";

for (let i = 0; i < 10; i++) {
    console.log("fun");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

//Condition

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function() {
    console.log("hovering over the condition container");
    square.style.backgroundColor = "green";
})

conditionContainer.addEventListener("mouseout", function() {
    //console.log("hovering over the condition container");
    square.style.backgroundColor = "lightsalmon";
})

//Time

const element = document.getElementById("increaseText");
let fontSize = 16; 

function increaseFontSize() {
    fontSize++;
    element.style.fontSize = fontSize + "px";
}

setInterval(increaseFontSize, 1000);

// Input
const textInput = document.getElementById("inputText");
const textLengthDisplay = document.getElementById("text-length");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    console.log("submit button is pressed");
    var inputText = textInput.value;
    var charCount = inputText.length;
    textLengthDisplay.textContent = "Character count: " + charCount;
});
