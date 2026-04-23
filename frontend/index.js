
let startPage = document.querySelector("#startPage");
let messagePage = document.querySelector("#messagePage")
let chapter1Page = document.querySelector("#chapter1");
let chapter2Page = document.querySelector("#chapter2");
let chapter3Page = document.querySelector("#chapter3");
let chapter4Page = document.querySelector("#chapter4");
let chapter5Page = document.querySelector("#chapter5");
let chapter6Page = document.querySelector("#chapter6");
let geoLocCircle = document.querySelector("#geoLocationCircle");

let allPages = [startPage, messagePage, chapter1Page, chapter2Page, chapter3Page, chapter4Page, chapter5Page, chapter6Page];

let humanButton = document.querySelector("#humanButton");
let phoneButton = document.querySelector("#phoneButton");
let smsBubble = document.querySelector("#smsBubble")

// Start Page Listeneres

humanButton.addEventListener("click", () => {

    startPage.style.backgroundImage = "url('../images/Cover_Page_with_phone.jpg')"
    phoneButton.style.display = "flex"
    humanButton.style.display = "none"
    smsBubble.style.display = "flex"

    setTimeout(() => {
        startPage.style.backgroundImage = "url('../images/Cover_Page_Edit.jpg')"
        phoneButton.style.display = "none"
        humanButton.style.display = "flex"
        smsBubble.style.display = "none"
    }, 20000)

})

smsBubble.addEventListener("click", () => {

})

// Diven som visar din page (Vi tar bort när vi är klara)

let showMyPageInput = document.querySelector("#myChosenPage")
showMyPageInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        switchPage(showMyPageInput.value)
        showMyPageInput.value = ""
    }

})

//geoLocation

let radius = 25;
let targetLocation = { latitude: 55.61095897390887, longitude: 12.994880656345511 };

navigator.geolocation.watchPosition((position) => {
    let userCordLatitude = position.coords.latitude;
    let userCordLongitude = position.coords.longitude;

    let distance = getDistanceM(userCordLatitude, userCordLongitude, targetLocation.latitude, targetLocation.longitude)
    if (distance <= radius) {
        geoLocCircle.style.backgroundColor = "green"
    }
})

function getDistanceM(lat1, lng1, lat2, lng2) {
    const metersPerDeg = 111139;
    const dx = (lng2 - lng1) * metersPerDeg * Math.cos(lat1 * Math.PI / 180);
    const dy = (lat2 - lat1) * metersPerDeg;
    return Math.sqrt(dx * dx + dy * dy);
}

