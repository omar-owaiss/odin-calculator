let firstNumber = ""
let secondNumber = ""
let operator = ""
let isEnteringSecondNumber = false

let btnDigit = document.querySelectorAll(".digit")
let btnOperator = document.querySelectorAll(".operator")
let btnClear = document.querySelector(".clear")
let buttons = document.querySelector(".buttons")
let display = document.querySelector(".numbers")
let btnEqual = document.querySelector(".equal")


const add = function(num1, num2) {
    return num1 + num2
}

const subtract = function(num1, num2) {
    return num1 - num2
}

const multiply = function(num1, num2) {
    return num1 * num2
}

const divide = function(num1, num2) {
    return num1 / num2
}

const operate = function (num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2)
    }
    else if (operator === "-") {
        return subtract(num1, num2)
    }
    else if (operator === "/") {
        return divide(num1, num2)
    }
    else if (operator === "*") {
        return multiply(num1, num2)
    }
    else {
        return "please pick a valid number and operator"
    }
}

buttons.addEventListener("click", (e) => {
    display.textContent = ""
    if (e.target.classList.contains("digit")) {
        if (!isEnteringSecondNumber) {
        firstNumber += e.target.textContent
        }
        else {secondNumber += e.target.textContent}
    }
    else if (e.target.classList.contains("operator")) {
        operator = e.target.textContent
        isEnteringSecondNumber = true
    }
    display.textContent = display.textContent+`${firstNumber} ${operator} ${secondNumber}`
})


btnEqual.addEventListener("click", () => {
    display.textContent = ""
    let result = operate(firstNumber, secondNumber, operator)
    display.textContent = `${result}`
    firstNumber = result
    secondNumber = ""
    operator = ""
    isEnteringSecondNumber = false
})

btnClear.addEventListener("click", () => {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    isEnteringSecondNumber = false
})