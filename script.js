var firstNum,secondNum,operator;
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
console.log(add(1,2));
console.log(subtract(2,1));
console.log(multiply(3,4));
console.log(divide(4,2));