const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');
let currentInput = '0';
let storedValue = null;
let pendingOperator = null;
let waitingForOperand = false;
let hasError = false;

function updateDisplay() {
    if (pendingOperator && storedValue !== null) {
        const operatorSymbol = { '*': '×', '/': '÷' }[pendingOperator] || pendingOperator;
        const expression = `${storedValue} ${operatorSymbol}`;
        display.textContent = waitingForOperand
            ? expression
            : `${expression} ${currentInput}`;
        return;
    }

    display.textContent = currentInput;
}

function reset() {
    currentInput = '0';
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = false;
    hasError = false;
    updateDisplay();
}

function appendDigit(digit) {
    if (hasError) {
        reset();
    }
    if (waitingForOperand) {
        currentInput = digit === '.' ? '0.' : digit;
        waitingForOperand = false;
    } else if (digit === '.') {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    } else if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function calculate(left, right, operator) {
    switch (operator) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return right === 0 ? null : left / right;
        default: return null;
    }
}

function showError(message) {
    currentInput = message;
    display.textContent = message;
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = true;
    hasError = true;
}

function chooseOperator(operator) {
    if (hasError) {
        reset();
    }
    const inputValue = Number(currentInput);
    if (pendingOperator && !waitingForOperand) {
        const result = calculate(storedValue, inputValue, pendingOperator);
        if (result === null || !Number.isFinite(result)) {
            showError('Cannot divide by zero');
            return;
        }
        currentInput = String(result);
        storedValue = result;
    } else if (storedValue === null) {
        storedValue = inputValue;
    }
    pendingOperator = operator;
    waitingForOperand = true;
    updateDisplay();
}

function evaluate() {
    if (hasError || !pendingOperator || waitingForOperand) {
        return;
    }
    const result = calculate(storedValue, Number(currentInput), pendingOperator);
    if (result === null || !Number.isFinite(result)) {
        showError('Cannot divide by zero');
        return;
    }
    currentInput = String(result);
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = true;
    updateDisplay();
}

function deleteLast() {
    if (hasError) {
        reset();
        return;
    }
    if (waitingForOperand) {
        return;
    }
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
    if (currentInput === '-' || currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function toggleSign() {
    if (hasError) {
        reset();
    }
    if (Number(currentInput) !== 0) {
        currentInput = String(Number(currentInput) * -1);
        updateDisplay();
    }
}

function handleAction(action, value) {
    if (action === 'number') {
        for (const digit of value) {
            appendDigit(digit);
        }
    } else if (action === 'operator') {
        chooseOperator(value);
    } else if (action === 'equals') {
        evaluate();
    } else if (action === 'delete') {
        deleteLast();
    } else if (action === 'sign') {
        toggleSign();
    } else if (action === 'clear') {
        reset();
    }
}

buttons.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (button) {
        handleAction(button.dataset.action, button.dataset.value || '');
    }
});

document.addEventListener('keydown', event => {
    if (/^[0-9.]$/.test(event.key)) {
        appendDigit(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        chooseOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        evaluate();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (event.key === 'Escape') {
        reset();
    }
});
