var firstNum,secondNum,operator,displayNumber;
const displayContainer = document.getElementById("display");
const operands = document.getElementsByClassName("operand");
let displayDiv = document.createElement("div");
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
/*
document.getElementById("one").addEventListener("click",function(){
      displayNumber = 1;
      let div = document.createElement("div");
      div.textContent = displayNumber;
      displayContainer.appendChild(div);
});
*/
function displayOperand(e){
    var displayNumber = e.target.value;
    displayDiv.textContent = displayNumber;
    console.log(displayNumber);
}
for(i = 0; i < operands.length;i++){
    operands[i].addEventListener("click",displayOperand);
}
displayContainer.appendChild(displayDiv);