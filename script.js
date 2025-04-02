console.log("hello!")

const maximum_digit = 10

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
    return a / b
}

// When user hit =
function operate(operandA, operandB, operator) {
    return operator(operandA, operandB);
}


//Add the number buttons
const numberButtonContainer = document.querySelector('.buttons .numbers')

let numbers = [9,8,7,6,5,4,3,2,1,0,'.']
numbers.forEach(
    number => {
        let numberButton = document.createElement('button')
        numberButton.textContent = `${number}`
        numberButton.classList = 'numberButton'
        numberButton.addEventListener('click', (e)=>alert(e.target.textContent))
        numberButtonContainer.appendChild(numberButton)

        // 0 is twice the width as others. 
        if (number === 0) {
            numberButton.style.width = '66.7%'
        }

    }
)