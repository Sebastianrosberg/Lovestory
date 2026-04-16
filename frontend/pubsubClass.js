 let pageArray = [];
 let chapters = document.querySelectorAll(".chapter") 
for(let i = 1; i < chapters.length; i++) {
    pageArray.push(document.querySelector(`#chapter${i}`))
}

console.log(pageArray);

 

class pubSub {

    static activeSubscription = [];

    constructor(item){
        item = this.item

        activeSubscription.push(item)
    }




    activePage(page) {
        forEach(page => page.classList.add("hide"))
    }

}