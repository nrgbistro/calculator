let mem = "";


function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(operator, n1, n2) {
    switch (operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return ret = divide(n1, n2);
        default:
            console.log("NO OPERATOR");
            return;
    }
}

function init() {
    // Set constants by IDs
    const numberContainer = document.querySelector("#numberContainer");
    const operatorContainer = document.querySelector("#operatorContainer");

    // Numbers button setup
    for (let i = 1; i <= 9; i++) {
        // Create new button with id of i
        let newButton = document.createElement("div");
        newButton.id = `${i}`;
        numberContainer.appendChild(newButton);

        // Jquery selector for new button
        let $button = $(`#${i}`);
        $button.text(`${i}`);

        // Click event for number buttons
        $button.click(function(n) {
            mem += n.currentTarget.id;
        });
    }

    // Operator button setup
    for (let i = 0; i < 5; i++) {
        const symbolsArray = ["+", "-", "X", "/", "="];
        let operatorButton = document.createElement("div");
        operatorButton.classList.add("operator");
        operatorButton.id = `${symbolsArray[i]}`;
        operatorButton.textContent = `${symbolsArray[i]}`;
        operatorContainer.appendChild(operatorButton);
    }
}

$(document).ready();
{
    init();
}