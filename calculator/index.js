const buttonsValue = document.querySelectorAll(".number-button");
const displayedNumber = document.getElementById("display");
const clearNumber = document.getElementById("clear");

buttonsValue.forEach(button => {
    button.addEventListener("click", (event) => {
        if (isTypingSecondNumber) {
            displayedNumber.value = event.target.textContent;
            isTypingSecondNumber = false;
        } else {
            displayedNumber.value += event.target.textContent;
        }
        
    });
});

clearNumber.addEventListener("click", () => {
    displayedNumber.value = null;
    firstNumber = null;
    operator = null;
    isTypingSecondNumber = false;
});

// Variables to store data
let firstNumber = null;
let operator = null;
let isTypingSecondNumber = false;


// 
const addButton = document.getElementById("add");
const equalButton = document.getElementById("equal");


addButton.addEventListener("click", () => {
    if (firstNumber === null) {
        firstNumber = parseFloat(displayedNumber.value);
    } else if (operator === "+") {
        const secondNumber = parseFloat(displayedNumber.value);
        const result = firstNumber + secondNumber;
        firstNumber = result;
        displayedNumber.value = result;
    }

    operator = "+";
    isTypingSecondNumber = true;
});


equalButton.addEventListener("click", () => {
    if (firstNumber !== null && operator === "+") {
        const secondNumber = parseFloat(displayedNumber.value);

        if (!isNaN(secondNumber)) {
            const result = firstNumber + secondNumber;
            displayedNumber.value = result;
            firstNumber = result;
            operator = null;
            isTypingSecondNumber = false;
        }
    }
});
