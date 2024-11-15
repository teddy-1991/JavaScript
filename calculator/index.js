const buttonsValue = document.querySelectorAll(".number-button");
const displayedNumber = document.getElementById("display");
const clearNumber = document.getElementById("clear");


buttonsValue.forEach(button => {
    button.addEventListener("click", (event) => {
        displayedNumber.value += event.target.textContent;
    })
})

clearNumber.addEventListener("click", () => {
    displayedNumber.value = null;
})

