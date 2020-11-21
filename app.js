const display = document.querySelector("#display");
let cal = document.querySelector("#cal");

const nums = document.querySelectorAll(".nums");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const equals = document.querySelector("#equals");
const clear  = document.querySelector("#clear");

let result = 0;
let calculations = "";

let firstNumInput = true

let operator = "";
let secondNum = "";

for (num of nums) {
    num.addEventListener('click', function(num){
        if (operator == ""){
            if (result != 0) {
                result += num.srcElement.innerText
            }
            else {
                result = num.srcElement.innerText
            }
        }
        else{
            if(secondNum != 0){
                secondNum += num.srcElement.innerText;
            } else {
                secondNum = num.srcElement.innerText;
            }
            
            cal.innerText = calculations + secondNum;
        }
            display.innerText = result;
        }
    )
}


plus.addEventListener('click', function () {
    calculations = "\u002B";
    operator = "plus";
    addOperation()
})

minus.addEventListener('click', function () {
    calculations = "\u2212";
    operator = "minus";
    addOperation()
  })

multiply.addEventListener('click', function () {
    calculations = "\u00D7";
    operator = "multiply";
    addOperation()
  })

divide.addEventListener('click', function () {
    calculations = "\u00F7";
    operator = "divide";
    addOperation()
  })



function addOperation() {
    cal.innerText = calculations;
    secondNum = "";
    have_operation = true;
}


equals.addEventListener('click', function (){
    switch (operator) {
        case "plus":
            result = parseInt(result) + parseInt(secondNum);
            break; 
        case "minus":
            result = parseInt(result) - parseInt(secondNum);
            break;
        case "multiply":
            result = parseInt(result) * parseInt(secondNum);
            break;
        case "divide":
            result = secondNum == 0? "ERROR" : parseInt(result) / parseInt(secondNum);
            break;
    }
    if (isNaN(result)){
        result = "ERROR"
    }
    display.innerText = result;    
})

clear.addEventListener('click', function (){
    result = 0;
    display.innerText = result;
    cal.innerText = "";
    operator = "";
})
