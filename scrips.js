// Set constants by IDs
const operatorSymbols = ["Clear", "+", "-", "*", "/", "="];
const operatorIdNames = ["clear", "plus", "minus", "multiply", "divide", "equals"];


// Memory for current operation
let mem = "";
const output = $("#output h1");

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
			return "NaN";
	}
}

function init() {
	// Numbers button setup
	for (let i = 1; i <= 10; i++) {
		// Create new button with id of i
		createButton(i, "#numberContainer");
	}

	// Operator button setup
	for (let i = 0; i < 6; i++) {
		// Create new button with id of currentSymbol
		createButton(i, "#operatorContainer");
	}
}

// Creates most buttons on the calculator
function createButton(i, target) {
	let newButton = document.createElement("div");
	let $button = null;
	if (target === "#operatorContainer" && operatorSymbols[i] === "Clear") {
		createClearButton();
		return;
	} else if (target === "#operatorContainer" && operatorSymbols[i] === "=") {
		createEqualsButton();
		return;
	} else if (target === "#numberContainer") {
		if (i === 10) {
			i = 0;
		}
		newButton.id = String(i);
		document.querySelector(target).appendChild(newButton);

		// Jquery selector for new button
		$button = $("#" + i);
		$button.text(i);
	} else {
		newButton.id = operatorIdNames[i];
		document.querySelector(target).appendChild(newButton);

		// Jquery selector for new button
		$button = $("#" + operatorIdNames[i]);
		$button.text(operatorSymbols[i]);
	}

	// Click event for operator buttons
	$button.click(function (n) {
		let clickedValue = String(n.currentTarget.textContent);

		let outputText = String(output.text());
		if (outputText === "NaN" || outputText === "Infinity" || outputText === "UNABLE TO DIVIDE BY ZERO BITCH") {
			outputText = "";
			mem = "";
		}

		mem += clickedValue;
		outputText += clickedValue;
		output.text(outputText);
	});
}

// Creates equals button on calculator
function createEqualsButton() {
	let newButton = document.createElement("div");
	newButton.id = "equals";
	document.querySelector("#operatorContainer").appendChild(newButton);

	// Jquery selector for button
	let $button = $("#equals");
	$button.text("=");
	$button.click(evaluateMem);
}

function createClearButton() {
	let newButton = document.createElement("div");
	newButton.id = "clear";
	document.querySelector("#operatorContainer").appendChild(newButton);

	// Jquery selector for button
	let $button = $("#clear");
	$button.text("Clear");
	$button.click(clearAll);
}

// Parses user input and clears mem
function evaluateMem() {
	let index = 0;
	let memArray = mem.split("");
	for (let i = 0; i < memArray.length; i++) {
		if (operatorSymbols.includes(memArray[i])) {
			index = i;
		}
	}
	let n1 = Number(mem.substring(0, index));
	let n2 = Number(mem.substring(index + 1, mem.length));

	if (memArray[index] === "/" && n2 === 0) {
		output.text("UNABLE TO DIVIDE BY ZERO BITCH");
	} else {
		output.text(operate(memArray[index], n1, n2));
	}
	if (output.text() == Number(output.text())) {
		mem = String(output.text());
	}
}

$(document).ready();
{
	init();
}


function clearAll() {
	clearScreen();
	clearMem();
}

function clearScreen() {
	output.text("");
}

function clearMem() {
	mem = "";
}