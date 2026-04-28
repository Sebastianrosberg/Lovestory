function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
    })
    let myPage = document.querySelector(`#${page}`)
    myPage.classList.remove("hide")
}


