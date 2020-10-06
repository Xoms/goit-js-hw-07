export default class Task4 {

    incrBtn = document.querySelector('[data-action="increment"]');
    decBtn = document.querySelector('[data-action="decrement"]');
    cnt = 0
    constructor(initCnt){

        
        this.counter = document.querySelector('#value');
        this.counter.innerHTML = initCnt || 0;

        this.cnt = initCnt || 0;


        this.incrBtn.addEventListener('click', this.doIncrement.bind(this));
        this.decBtn.addEventListener('click', this.doDecrement.bind(this));
    }

    doIncrement() {
        this.cnt++;
        this.updCounter();
    }

    doDecrement(){
        this.cnt--;
        this.updCounter();
    }

    updCounter(){
        this.counter.innerHTML = this.cnt
    }
}