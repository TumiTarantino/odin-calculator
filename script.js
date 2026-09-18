//functions
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    //Won't handle division by zero
    return a/b;
}

function operate(operator, a, b){
    if(operator == "+"){
        return add(a,b);
    }
    else if (operator == "-"){
        return subtract(a ,b);
    }
    else if(operator == "*"){
        return multiply(a ,b);
    }
    else if(operator == "/"){
        return divide(a ,b);
    }
}

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

function clearAll(){
    A = 0;
    operator = null;
    B = null;
}

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
    button.addEventListener("click",() => {
        if (rightSymbols.includes(value)){
            //Im sure the logic here is preventing multiple correct operator calls
            if (value == "="){
                if(A != null){
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator == "/"){
                        display.value = operate("/",numA,numB);
                    }
                    else if (operator == "*"){
                        display.value = operate("*",numA,numB);
                    }
                    else if (operator == "-"){
                        display.value = operate("-",numA,numB);
                    }
                    else if (operator == "+"){
                        display.value = operate("+",numA,numB);
                    }
                    clearAll();
                }
            }
            else{
                operator = value;
                A = display.value;
                display.value = "";

            }
        }
        else if (topSymbols.includes(value)){
            if(value == "C"){
                clearAll();
                display.value = "";
            }
            else if(value == "x"){
                //Backspace
                display.value = display.value.slice(0,-1);
            }
            else if(value == "%"){
                display.value = Number(display.value)/100;
            }
        }
        //Numbers or . or ()
        else{
            if (value == "."){
                //checks if display is not empty and if there is not a decimal(prevents more than one dot existing)
                if(display.value != "" && !display.value.includes(value)){
                    display.value += value;
                }
            }
            // checks if 0 so 0 doesn't waste space
            else if(display.value == "0"){
                display.value = value;
            }
            else if(value == "()"){
                //Still need to implement
                display.value = "";
            }

            else {
                display.value += value;
            }
        }
    
    })
    // add buttons to calculator
    document.getElementById("buttons").appendChild(button);
}
