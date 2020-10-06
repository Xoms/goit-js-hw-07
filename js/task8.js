export default class Task8 {
    boxes = document.getElementById('boxes')
    destrBtn = document.querySelector('[data-action="destroy"]');
    createBtn = document.querySelector('[data-action="render"]');
    ctrlInput = document.querySelector('#controls input');

    constructor(){
        this.createBtn.addEventListener('click', this.creatorHandler.bind(this));
        this.destrBtn.addEventListener('click', this.destrHandler.bind(this))
    }

    creatorHandler(){
        const qntBoxes = this.ctrlInput.value;
        const style = {
            width: 30,
            height: 30
        }

        for (let i = 0; i < qntBoxes; i++){
            const box = document.createElement('div');
            box.classList.add('box');


            box.style.width = style.width + 10 * i + 'px';
            box.style.height = style.height + 10 * i + 'px';

            const r = Math.round(Math.random()*255);
            const g = Math.round(Math.random()*255);
            const b = Math.round(Math.random()*255);
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
            console.log(box);
            console.log(this.boxes);
            this.boxes.appendChild(box); 
        }
    }

    destrHandler(){
        this.boxes.innerHTML = '';
    }

}