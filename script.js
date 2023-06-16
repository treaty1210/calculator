//Query selectors
const body = document.querySelector("body");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator")
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const results = document.querySelector(".results");

//Calculator Functions
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
