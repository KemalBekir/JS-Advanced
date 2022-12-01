function subtract() {
    let num1 = Number(document.querySelector('#firstNumber').value);
    let num2 = Number(document.querySelector('#secondNumber').value);

    let result = document.querySelector('#result')  ;
    result.textContent = num1 - num2; 
}