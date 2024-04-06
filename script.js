var displayNumber = 0;
var firstNum, secondNum, operator = null;
const displayContainer = document.getElementById("display");
const operands = document.getElementsByClassName("operand");
const operators = document.getElementsByClassName("operator");
const equals = document.getElementsByClassName("equal");
const clears = document.getElementsByClassName("clear");
function updateDisplay(){
    displayContainer.innerText = displayNumber;
}
function operate(firstNum,secondNum,operator){
    if(operator == "+"){
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        return firstNum + secondNum;
    }
    if(operator == "-"){
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        return firstNum - secondNum;
    }
    if(operator == "/"){
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        if(secondNum == 0){
            return ("XD");
        }
        var value = firstNum/secondNum;
        value = Math.round(value*100)/100;
        return value;
    }
    if(operator == "*"){
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        return firstNum * secondNum;
    }
}

function displayOperand(e){
    if(displayNumber == "XD" && firstNum == null & secondNum == null && operator == null){
        displayNumber =0;
        
    }
    if(firstNum == null){
        if(displayNumber == 0){
            displayNumber = e.target.value;
        }
        else{
            displayNumber += e.target.value;
        }
    }
    else {
        if(displayNumber == firstNum) {
            displayNumber = e.target.value;
        } else {
            displayNumber+= e.target.value;
        }
    }
    updateDisplay();
}
function equalOperate(e){
   secondNum = displayNumber;
   let result = operate(firstNum,secondNum,operator);
   displayNumber = result;
   updateDisplay();
   firstNum = null;
   secondNum = null;
   operator = null;
}
function clearOperate(e){
   firstNum = null;displayNumber = "XD";
   updateDisplay;
   secondNum = null;
   operator = null;
   displayNumber = 0;
   updateDisplay();
}
function computeOperater(e){
    if(firstNum == null){
        firstNum = displayNumber;
    }
    else if(secondNum == null){
        secondNum = displayNumber;
    }
    if(firstNum != null && secondNum != null && operator != null){
        let result = operate(firstNum,secondNum,operator);
        displayNumber = result;
        updateDisplay();
        firstNum = result;
        secondNum = null;
    }
    operator = e.target.value;
}
for(let i = 0; i < operands.length;i++){
    operands[i].addEventListener("click",displayOperand);
}
for (let i = 0; i < operators.length;i++){
    operators[i].addEventListener("click",computeOperater);
}
equals[0].addEventListener("click",equalOperate);
clears[0].addEventListener("click",clearOperate);


updateDisplay();