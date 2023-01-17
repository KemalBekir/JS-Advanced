function validate() {
    const inputField = document.getElementById('email');
    const validMail = /(^[a-z]+@[a-z]+\.[a-z]+$)/;
    inputField.addEventListener('change', ()=>{
        if(!validMail.test(inputField.value)){
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    });
}