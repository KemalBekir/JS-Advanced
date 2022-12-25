function calculator() {
    let firstInput;
    let secondInput;
    let resultBox;

    function init(selecto1, selector2, selector3){
        firstInput = document.querySelector(selecto1);
        secondInput = document.querySelector(selector2);
        resultBox = document.querySelector(selector3);

    }

    function add(){
        resultBox.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract(){
        resultBox.value = Number(firstInput.value) - Number(secondInput.value);
    }

    return {
        init,
        add,
        subtract
    }
}




