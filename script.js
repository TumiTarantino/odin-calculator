//These functions need type checks before trying to return the numbers
function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}

//Calculator input variables
let num1 = 0;
//Should the operator be string?
let operator = "+";
let num2 = 0;

function operate(num1,operator,num2){
    if(operator === "+"){
        return add(num1,num2);
    }
    else if(operator === "-"){
        return subtract(num1,num2);
    }
    else if(operator === "*"){
        return multiply(num1,num2);
    }
    else if(operator === "/"){
        return divide(num1,num2);
    }
}

//Event listeners for calculator buttons
const display = document.querySelector(".calculator-display");

const buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach(button => {button.addEventListener("click", () => {
    alert("button pressed")
})})