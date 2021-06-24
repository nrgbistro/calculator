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
			break;
		case "-":
			return subtract(n1, n2);
			break;
		case "*":
			return multiply(n1, n2);
			break;
		case "/":
			return ret = divide(n1, n2);
			break;
		default:
			console.log("NO OPERATOR");
			return;
	}
}

function init() {
	const numberContainer = document.querySelector("#numberContainer");
	const operatorContainer = document.querySelector("#operatorContainer");

	// Numbers button setup
	for (let i = 0; i < 9; i++) {
		let numberButton = document.createElement("div");
		numberButton.classList.add("number");
		numberButton.id = `${i + 1}`;
		numberButton.textContent = `${i + 1}`;
		numberContainer.appendChild(numberButton);
	}

	for (let i = 0; i < 5; i++) {
		const symbolsArray = ["+", "-", "X", "/", "="];
		let operatorButton = document.createElement("div");
		operatorButton.classList.add("operator");
		operatorButton.id= `${symbolsArray[i]}`;
		operatorButton.textContent = `${symbolsArray[i]}`;
		operatorContainer.appendChild(operatorButton);
	}
}

init();

console.log(operate("/", 17, 3));