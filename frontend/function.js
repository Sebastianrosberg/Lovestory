function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
    })
    let myPage = document.querySelector(`#${page}`)
    myPage.classList.remove("hide")
    myPage.classList.add("reveal")
}

let currentPage = 2;

function showPage(index) {
    allPages.forEach(page => page.classList.remove("reveal"));
    allPages[index].classList.remove("hide");
    allPages[index].classList.add("reveal");
}

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