console.log("hello!")

const maximum_digit = 10
let number1 = '' // Default as 0
let number2 = '' 
let operator = {text : '', func : undefined} // operator stores a function

//Basic Binary Arithmatic Functions
function sum(a, b){
    return a + b
}

function minus(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return parseFloat((a / b).toPrecision(8))
}

// When user hit =
function operate(operandA, operandB, operatorFunc) {
    return operatorFunc(operandA, operandB);
}


//Add the number buttons
const numberButtonContainer = document.querySelector('.buttons .numbers')

let numbers = [9,8,7,6,5,4,3,2,1,0,'.']
numbers.forEach(
    number => {
        let numberButton = document.createElement('button')
        numberButton.textContent = `${number}`
        numberButton.addEventListener('click', userInputNumber)
        numberButtonContainer.appendChild(numberButton)

        // 0 is twice the width as others. 
        if (number === 0) {
            numberButton.style.width = '66.7%'
        }

    }
)


function userInputNumber(event) {
    if (operator.func === undefined) {
        // If no operator, user is inputting number 1
        number1 += event.target.textContent
    } else {
        number2 += event.target.textContent
    }

    updateScreen()
}


//Add the operator buttons.
const operButtonContainer = document.querySelector('.buttons .operators')

let operators = ['AC','←', '+', '-', '×','÷', '%', '=']
operators.forEach(
    operator => {
        let operButton = document.createElement('button')
        operButton.textContent = `${operator}`
        operButton.addEventListener('click', userInputOperator)
        operButtonContainer.appendChild(operButton)
    }
)

function userInputOperator(event){

    let clicked = event.target.textContent
    operator.text = clicked

    switch(clicked){
        case '=':
            operator.text = ''
            operate()
            break
        case '+':
            operator.func = sum
            break
        case '-':
            operator.func = minus
            break
        case '×':
            operator.func = multiply
            break
        case '÷':
            operator.func = divide
            break
    }

    updateScreen()
}

function operate(){
    if (number1 && number2 && operator.func){
        number1 = operator.func(+number1,+number2)
        number2 = ''
        operator.text = ''
        operator.func = undefined
    }
    updateScreen()
}


const screen = document.querySelector('.screen')

function updateScreen(){
    screen.textContent = `${number1}${operator.text}${number2}`
}