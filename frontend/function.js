function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
    })
    let myPage = document.querySelector(`#${page}`)
    myPage.classList.remove("hide")
    myPage.classList.add("reveal")
}

function goBackAPage(currentPage) {

}

function goForthAPage(currentPage) {

}