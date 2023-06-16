//Query selectors
const body = document.querySelector("body");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const results = document.querySelector(".results");

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
        results.innerText = answer;
    } 

    if (operator === "-") {
        let answer = subtract(valueOne, valueTwo); 
        results.innerText = answer;
    }  

    if (operator === "×") {
        let answer = multiply(valueOne, valueTwo);
        results.innerText = answer;  
    } 

    if (operator === "/") {
        let answer = divide(valueOne, valueTwo);
        results.innerText = answer;
    } 
}