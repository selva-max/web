let firstNumber="";
let SecondNumber="";
let operator="";

let clickSound = new Audio("sk.wav");

function playSound() {
    clickSound.currentTime = 0; // restart if already playing
    clickSound.play();
}

function append(number){
    playSound();
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    }
    else{
        SecondNumber+=number;
         document.getElementById('res').value=firstNumber+operator+SecondNumber;
    }
}

function operate(op){
    playSound();
    operator=op;
    document.getElementById('res').value=firstNumber+operator;
}
function calculate(){
    playSound();
        let result;
    switch(operator){
        case'+':
        result=parseInt(firstNumber)+parseInt(SecondNumber);
        break;
         case'-':
        result=parseInt(firstNumber)-parseInt(SecondNumber);
        break;
         case'*':
        result=parseInt(firstNumber)*parseInt(SecondNumber);
        break;
         case'/':
        result=parseInt(firstNumber)/parseInt(SecondNumber);
        break;
    }
    document.getElementById('res').value=result;
}
function clearresult(){
    playSound();
    firstNumber="";
    SecondNumber="";
    operator="";
    document.getElementById('res').value="";
}