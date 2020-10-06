export default class Task5 {
    input = document.querySelector('#name-input');
    output = document.querySelector('#name-output');
    constructor(){
        this.input.addEventListener('keyup', this.inputHandler.bind(this));
    }

    inputHandler(){
        if (!this.input.value){
            this.output.innerHTML = 'незнакомец';
        } else this.output.innerHTML = this.input.value;
    }
}