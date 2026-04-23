function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
        e.classList.remove("reveal")
    })
    let myPage = document.querySelector(`#${page}`)
    myPage.classList.remove("hide")
    myPage.classList.add("reveal")
}


