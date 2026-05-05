
let startPage = document.querySelector("#startPage");
let messagePage = document.querySelector("#messagePage")
let chapter1Page = document.querySelector("#chapter1");
let chapter2Page = document.querySelector("#chapter2");
let chapter3Page = document.querySelector("#chapter3");
let chapter4Page = document.querySelector("#chapter4");
let chapter5Page = document.querySelector("#chapter5");
let chapter6Page = document.querySelector("#chapter6");
let geoLocCircle = document.querySelector("#geoLocationCircle");
let smsSignal = document.querySelector("#smsSignal")

let allPages = [startPage, messagePage, chapter1Page, chapter2Page, chapter3Page, chapter4Page, chapter5Page, chapter6Page];

let humanButton = document.querySelector("#humanButton");
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");


// Start Page Listeneres

humanButton.addEventListener("click", () => {

    startPage.style.backgroundImage = "url('../images/Cover_Page_with_phone.jpg')"
    humanButton.style.display = "none"
    smsSignal.play()

    setTimeout(() => {
        startPage.style.backgroundImage = "url('../images/Cover_Page_Edit.jpg')"
        humanButton.style.display = "flex"
    }, 10000);

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

let radius = 30;
let chapter1Location = { latitude: 55.61095897390887, longitude: 12.994880656345511 };
let chapter2Location = { latitude: 55.61095897390887, longitude: 12.994880656345511 };
let chapter3Location = { latitude: 55.61095897390887, longitude: 12.994880656345511 };
let chapter4Location = { latitude: 55.61095897390887, longitude: 12.994880656345511 };
let chapter5Location = { latitude: 55.61095897390887, longitude: 12.994880656345511 };
let chapter6Location = { latitude: 55.61095897390887, longitude: 12.994880656345511 };


navigator.geolocation.watchPosition((position) => {
    let userCordLatitude = position.coords.latitude;
    let userCordLongitude = position.coords.longitude;

    let distance = getDistanceM(userCordLatitude, userCordLongitude, targetLocation.latitude, targetLocation.longitude)
    if (distance <= radius) {
        geoLocCircle.style.backgroundColor = "green"
    }
})

function getDistanceM(lat1, lng1, lat2, lng2) {
    console.log("FunctionCall getdistance");
    
    const metersPerDeg = 111139;
    const dx = (lng2 - lng1) * metersPerDeg * Math.cos(lat1 * Math.PI / 180);
    const dy = (lat2 - lat1) * metersPerDeg;
    return Math.sqrt(dx * dx + dy * dy);
}
































// Gå fram eller bak mellan sidorna


document.querySelector(".backButton").addEventListener("click", () => {
    currentPage = goBackAPage(currentPage);
})

document.querySelector(".nextButton").addEventListener("click", () => {
    currentPage = goForthAPage(currentPage);
})