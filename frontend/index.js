let startPage = document.querySelector("#startPage");
let chapter1Page = document.querySelector("#chapter1");
let chapter2Page = document.querySelector("#chapter2");
let chapter3Page = document.querySelector("#chapter3");
let chapter4Page = document.querySelector("#chapter4");
let chapter5Page = document.querySelector("#chapter5");
let chapter6Page = document.querySelector("#chapter6");

let allPages = [startPage, chapter1Page, chapter2Page, chapter3Page, chapter4Page, chapter5Page, chapter6Page];

let humanButton = document.querySelector("#humanButton");
let phoneButton = document.querySelector("#phoneButton");

// Start Page Listeneres

humanButton.addEventListener("click", () => {

    startPage.style.backgroundImage = "url('../images/Cover_Page_with_phone.jpg')"
    phoneButton.style.display = "flex"
    humanButton.style.display = "none"

    setTimeout( () => {
        startPage.style.backgroundImage = "url('../images/Cover_Page_Edit.jpg')"
        phoneButton.style.display = "none"
        humanButton.style.display = "flex"
    }, 2000)

})