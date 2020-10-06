export default class Task7 {
    input = document.getElementById('font-size-control');
    text = document.getElementById('text');

    constructor(){
        this.input.addEventListener('change', this.handleFZ.bind(this));
    }

    handleFZ(){
        let val = this.input.value;
        console.log(val)
        this.text.style.fontSize = `${val}px`;
    }
}