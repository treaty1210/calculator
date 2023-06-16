//Query selectors
const body = document.querySelector("body");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const results = document.querySelector(".results");
const resultsTop = document.querySelector(".resultsTop")
const resultsBot = document.querySelector(".resultsBot")

//Global Variables
let value = ""; //multiDigit() won't work without this
let op = ""; //Initial value of operator, changes when insertOper() runs
let firstNum = ""; //Store first number
let secondNum = ""; //Store second number
//Operator Functions
//Add
const add = (valueOne, valueTwo) => {
    let answer = valueOne + valueTwo;
    return answer;
}

//Subtract
const subtract = (valueOne, valueTwo) => {
    let answer = valueOne - valueTwo;
    return answer;
}

//Multiply
const multiply = (valueOne, valueTwo) => {
    let answer = valueOne * valueTwo;
    return answer;
} 

//Divide
const divide = (valueOne, valueTwo) => {
    let answer = valueOne / valueTwo;
    return answer;
}

//Operate function
const operate = (firstNum, secondNum, operator) => {
    //To prevent from adding as a string instead of numbers
    const valueOne = Number(firstNum);
    const valueTwo = Number(secondNum);
    
    if (operator == "+") {
        let answer = add(valueOne, valueTwo);
        return answer;
    } 

    if (operator === "-") {
        let answer = subtract(valueOne, valueTwo); 
        return answer;
    }  

    if (operator === "×") {
        let answer = multiply(valueOne, valueTwo);
        return answer;  
    } 

    if (operator === "/") {
        let answer = divide(valueOne, valueTwo);
        return answer;
    } 
}

//Functions that populate the display when you click the number buttons
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        //console.log(e, e.target.textContent)
        multiDigit(e.target.textContent);
        resultsBot.textContent = secondNum;
    })
})

//Populates with an operator in results
operator.forEach(oper => {
    oper.addEventListener("click", (e) => {
        insertOper(e.target.textContent);
        resultsTop.textContent = firstNum;
        resultsBot.textContent = secondNum;
    })
})

//Allow for longer numbers instead of single digit
function multiDigit(num) {
    //Set limit for number
    if (secondNum.length < 15) {
        secondNum += num;
    }
}

//Add an operator into results
function insertOper(oper) {
    //console.log(oper);
    op = oper;
    firstNum = secondNum + " " + oper;
    //console.log(firstNum);
    secondNum = "";
    //console.log(secondNum)
}

//Clear calculator
clear.addEventListener("click", (e) => {
    resultsTop.textContent = "";
    resultsBot.textContent = "";
    firstNum = "";
    secondNum = "";
    op = "";
})

//Run operate function when pressing equal
equal.addEventListener("click", (e) => {

    resultsTop.textContent = firstNum  + " " + secondNum;

    if (resultsTop.textContent.includes("+")) {
        const split = resultsTop.textContent.split("+");
        resultsBot.textContent = roundNumber(operate(split[0], split[1], "+"));
    }

    if (resultsTop.textContent.includes("-")) {
        const split = resultsTop.textContent.split("-");
        resultsBot.textContent = roundNumber(operate(split[0], split[1], "-"));
    }

    if (resultsTop.textContent.includes("×")) {
        const split = resultsTop.textContent.split("×");
        resultsBot.textContent = roundNumber(operate(split[0], split[1], "×"));
    }

    if (resultsTop.textContent.includes("/")) {
        const split = resultsTop.textContent.split("/");
        resultsBot.textContent = roundNumber(operate(split[0], split[1], "/"));
    }

    //If there is no number, tell user to press number
    if  (resultsBot.textContent === "") {
        resultsBot.textContent = "Input a number"
    }
})

//Round number to prevent overflow
function roundNumber(num) {
    return Math.round(num * 10000) / 10000;
}