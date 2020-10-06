export default class Task6 {
    input = document.querySelector('#validation-input');
    constructor(){
        this.input.addEventListener('focusout', this.handleFocusOut.bind(this));
    }

    handleFocusOut(){
        const validationLength = +this.input.getAttribute('data-length');
        if (this.input.value.length !== validationLength){
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
        } else {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        }
    }
}