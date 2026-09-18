const buttonsValues = [
    "C", "x", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "()", "0", ".", "="
];
//x is backspace
const rightSymbols = ["/", "*", "-", "+", "="];
const topSymbols = ["C", "x", "%"];

const display = document.getElementById("display")

let A = 0;
let operator = null;
let B = null;

//Adds buttons and functionality to html
for(let i = 0; i < buttonsValues.length; i++){
    //Creates buttons in memory, does <button>AC</button>, for example
    let value = buttonsValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    //Styles button colours
    if(rightSymbols.includes(value)){
        button.style.backgroundColor = "#FF9500";
    }
    else if(topSymbols.includes(value)){
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    //process button clicks

    // add buttons to calculator
    document.getElementById("buttons").appendChild(button);
}
