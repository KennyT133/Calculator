var firstNum,secondNum,operator,displayNumber = 0;
const displayContainer = document.getElementById("display");
const operands = document.getElementsByClassName("operand");

function add(firstInput,secondInput){
    return firstInput + secondInput;
}
function subtract(firstInput,secondInput){
    return firstInput - secondInput;
}
function multiply(firstInput,secondInput){
    return firstInput * secondInput;
}
function divide(firstInput,secondInput){
    return firstInput / secondInput;
}
function operate(firstNum,secondNum,operator){
    if(operator == "+"){
        add(firstNum,secondNum);
    }
    if(operator == "-"){
        subtract(firstNum,secondNum);
    }
    if(operator == "/"){
        divide(firstNum,secondNum);
    }
    if(operator == "*"){
        multiply(firstNum,secondNum);
    }
}

function displayOperand(e){
    if(firstNum == null){
        if(displayNumber == 0){
            displayNumber = e.target.value;
            console.log(displayNumber);
        }
        else{
            displayNumber += e.target.value;
            console.log(displayNumber);
        }
    }
    updateDisplay();
}
for(i = 0; i < operands.length;i++){
    operands[i].addEventListener("click",displayOperand);
}
function updateDisplay(){
    displayContainer.innerText = displayNumber;
}

updateDisplay();