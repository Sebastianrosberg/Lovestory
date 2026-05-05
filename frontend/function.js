function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
    })
    let myPage = document.querySelector(`#${page}`)
    myPage.classList.remove("hide")
    myPage.classList.add("reveal")
}

let currentPage = 0;

function showPage(index) {
    allPages.forEach(page => page.classList.remove = "hide");
    allPages[index].classList.add = "reveal";
}

function goBackAPage(currentPage) {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function goForthAPage(currentPage) {
    if (currentPage < allPages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}