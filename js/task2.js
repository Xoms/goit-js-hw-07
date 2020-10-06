
export default class Task2 {
    ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
      ];
      
    constructor(){
        this.ul = document.querySelector("#ingredients")
    }
    createElemnts(){
        this.ingredients.forEach(el => {
            const li = document.createElement('li');
            li.innerHTML = el;
            this.ul.appendChild(li)
        });
    }
}