
console.log('js is working')


function add() {
    console.log('Add function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 + num2
    document.querySelector('#result').innerText = result
}

function sub() {
    console.log('Subtract function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 - num2
    document.querySelector('#result').innerText = result
}
function multiply() {
    console.log('Multiply function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 * num2
    document.querySelector('#result').innerText = result
}
function divide() {
    console.log('Divide function')

    let num1 = parseFloat(document.querySelector('.number1').value)
    let num2 = parseFloat(document.querySelector('.number2').value)
    let result = num1 / num2
    document.querySelector('#result').innerText = result
}