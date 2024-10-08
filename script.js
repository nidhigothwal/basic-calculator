console.log('js is working');

function add() {
    console.log('add function')

    let value1 = parseFloat(document.querySelector('.number1').value)
    let value2 = parseFloat(document.querySelector('.number2').value)
    let result = value1 + value2
    document.querySelector('#result') .innerText = result
}

function sub() {
    console.log('sub function')

    let value1 = parseFloat(document.querySelector('.number1').value)
    let value2 = parseFloat(document.querySelector('.number2').value)
    let result = value1 - value2
    document.querySelector('#result') .innerText = result
}
function multi() {
    console.log('multi function')

    let value1 = parseFloat(document.querySelector('.number1').value)
    let value2 = parseFloat(document.querySelector('.number2').value)
    let result = value1 * value2
    document.querySelector('#result') .innerText = result
}
function divide() {
    console.log('divide function')

    let value1 = parseFloat(document.querySelector('.number1').value)
    let value2 = parseFloat(document.querySelector('.number2').value)
    let result = value1 / value2
    document.querySelector('#result') .innerText = result
}
