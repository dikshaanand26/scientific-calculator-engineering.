function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function factorial() {
    let num = parseInt(document.getElementById('display').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('display').value = 'Error';
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById('display').value = fact;
}
