console.log('js is working');

function add() {
    console.log('add function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 + num2
    document.querySelector('#result') .innerText = result
}

function sub() {
    console.log('sub function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 - num2
    document.querySelector('#result') .innerText = result
}
function multi() {
    console.log('multi function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 * num2
    document.querySelector('#result') .innerText = result
}
function divide() {
    console.log('divide function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 / num2
    document.querySelector('#result') .innerText = result
}
