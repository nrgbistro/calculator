// Set constants by IDs
const numberContainer = document.querySelector("#numberContainer");
const operatorContainer = document.querySelector("#operatorContainer");
const symbols = ["+", "-", "*", "/", "="];
const idNames = ["plus", "minus", "multiply", "divide", "equals"];


// Memory for current operation
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
			return divide(n1, n2);
		default:
			console.log("NO OPERATOR");
			return;
	}
}

function init() {


	// Numbers button setup
	for (let i = 1; i <= 9; i++) {
		// Create new button with id of i
		createButton(i, "#numberContainer");
	}

	// Operator button setup
	for (let i = 0; i < 5; i++) {
		// Create new button with id of currentSymbol
		const currentSymbol = "#" + symbols[i];
		createButton(i, "#operatorContainer");
	}
}


// Creates most buttons on the calculator
function createButton(i, target) {
	let newButton = document.createElement("div");
	let $button = null;
	if (target === "#operatorContainer" && symbols[i] === "=") {
		createEqualsButton();
	} else if (target === "#numberContainer") {
		newButton.id = String(i);
		document.querySelector(target).appendChild(newButton);

		// Jquery selector for new button
		$button = $("#" + i);
		$button.text(i);
	} else {
		newButton.id = idNames[i];
		document.querySelector(target).appendChild(newButton);

		// Jquery selector for new button
		$button = $("#" + idNames[i]);
		$button.text(symbols[i]);
	}

	// Click event for operator buttons
	$button.click(function (n) {
		mem += n.currentTarget.textContent;
		updateOutput();
	});
}

// Creates equals button on calculator
function createEqualsButton() {

}


$(document).ready();
{
	init();
}


function updateOutput() {
	$("#output").children(0).text(mem);
}