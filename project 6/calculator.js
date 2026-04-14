const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';
let expression = '';

function updateDisplay() {
    display.textContent = expression || '0';
}

function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
    expression = '';
    updateDisplay();
}

function deleteLast() {
    if (currentInput) {
        currentInput = currentInput.slice(0, -1);
        expression = expression.slice(0, -1);
    }
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    expression += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    expression += ' ' + op + ' ';
    currentInput = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    if (isNaN(prev)) return;
    if (isNaN(current)) {
        if (previousInput !== '') {
            current = prev;
            expression += previousInput;
        } else {
            return;
        }
    }
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
        default:
            return;
    }
    expression = result.toString();
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== '') {
        const num = parseFloat(currentInput) * -1;
        currentInput = num.toString();
        expression = expression.replace(/\d+\.?\d*$/, num.toString());
        updateDisplay();
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.classList.contains('number')) {
            appendNumber(value);
        } else if (button.classList.contains('operator')) {
            if (value === '+/-') {
                toggleSign();
            } else {
                chooseOperator(value);
            }
        } else if (button.classList.contains('equals')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clear();
        } else if (button.classList.contains('delete')) {
            deleteLast();
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        appendNumber('.');
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        let op = e.key;
        if (op === '*') op = '×';
        if (op === '/') op = '÷';
        chooseOperator(op);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clear();
    }
});