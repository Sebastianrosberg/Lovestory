function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
        e.classList.remove("reveal")
    })
    page.classList.remove("hide")
    page.classList.add("reveal")
}

let currentPage = 2;

function showPage(index) {
    allPages.forEach(page => page.classList.remove("reveal"));
    allPages[index].classList.remove("hide");
    allPages[index].classList.add("reveal");
}

/* 

function goBackAPage() {
    allPages[currentPage].classList.remove("reveal");
    allPages[currentPage].classList.add("hide");
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function goForthAPage() {
    allPages[currentPage].classList.remove("reveal");
    allPages[currentPage].classList.add("hide");
    if (currentPage < allPages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

*/

function backToMenu() {
    allPages.forEach(page => {
        page.classList.remove("reveal");
        page.classList.add("hide");
        menuPage.classList.remove("hide");
        menuPage.classList.add("reveal");
    })
}