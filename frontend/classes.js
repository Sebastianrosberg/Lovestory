 let pageArray = [];
 let chapters = document.querySelectorAll(".chapter") 
for(let i = 1; i <= chapters.length; i++) {
    pageArray.push(document.querySelector(`#chapter${i}`))
}

 

class showPage {

    constructor(item){
        item = this.item
    }

    activePage(pageArray) {
        forEach(page => page.classList.add("hide"))
    }

}
