export default class Task1{
    constructor(){
        this.categories = document.querySelectorAll('#categories > .item');
    }

    countCategories() {
        console.log(`В спсике ${this.categories.length} категорий`)
    }

    countElements() {
        this.categories.forEach( cat => {
            let title = cat.querySelector('h2').innerHTML
            console.log (`Категория: ${title} \nКолличество элементов: ${cat.querySelectorAll('li').length} \n===================`);
        })
    }
}