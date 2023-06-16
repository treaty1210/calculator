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
const add = (a, b) => {
    let answer = a + b;
    return answer;
}

//Subtract
const subtract = (a, b) => {
    let answer = a - b;
    return answer;
}

//Multiply
const multiply = (a, b) => {
    let answer = a * b;
    return answer;
}

//Divide
const divide = (a, b) => {
    let answer = a / b;
    return answer;
}

//Operate function
const operate = (firstNum, secondNum, operator) => {
    //To prevent from adding as a string instead of numbers
    const valueOne = Number(firstNum);
    const valueTwo = Number(secondNum);

    if (operator === "+") {
        let answer = add(valueOne, valueTwo);
        resultsBot.innerText = answer;
    } 

    if (operator === "-") {
        let answer = subtract(valueOne, valueTwo); 
        resultsBot.innerText = answer;
    }  

    if (operator === "×") {
        let answer = multiply(valueOne, valueTwo);
        resultsBot.innerText = answer;  
    } 

    if (operator === "/") {
        let answer = divide(valueOne, valueTwo);
        resultsBot.innerText = answer;
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

//Making the calculator work
operator.forEach(oper => {
    oper.addEventListener("click", (e) => {
        insertOper(e.target.textContent);
        resultsTop.textContent = firstNum;
        resultsBot.textContent = secondNum;
    })
})

//Allow for longer numbers instead of single digit
function multiDigit(num) {
    secondNum += num;
}

//Add an operator into results
function insertOper(oper) {
    //console.log(oper);
    op = oper;
    firstNum = secondNum + " " + oper;
    console.log(firstNum);
    secondNum = "";
    console.log(secondNum)
}