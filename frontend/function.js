function switchPage(page) {
    allPages.forEach(e => {
        e.classList.add("hide")
        e.classList.remove("reveal")
    })
    page.classList.remove("hide")
    page.classList.add("reveal")
}
