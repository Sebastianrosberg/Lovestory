
let startPage = document.querySelector("#startPage");
let messagePage = document.querySelector("#messagePage")
let chapter1Page = document.querySelector("#chapter1");
let chapter2Page = document.querySelector("#chapter2");
let chapter3Page = document.querySelector("#chapter3");
let chapter4Page = document.querySelector("#chapter4");
let chapter5Page = document.querySelector("#chapter5");
let chapter6Page = document.querySelector("#chapter6");
let chapter7Page = document.querySelector("#chapter7");
let chapter8Page = document.querySelector("#chapter8");
let chapter9Page = document.querySelector("#chapter9");
let chapter10Page = document.querySelector("#chapter10");
let geoLocCircle = document.querySelector("#geoLocationCircle");
let smsSignal = document.querySelector("#smsSignal")

let allPages = [startPage, messagePage, chapter1Page, chapter2Page, chapter3Page, chapter4Page, chapter5Page, chapter6Page, chapter7Page, chapter8Page, chapter9Page, chapter10Page];

let humanButton = document.querySelector("#humanButton");
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let loadingSms = document.querySelector("#loadingSms")
let startPageSmsConversation = document.querySelector("#startPageSmsConversation")
let loadingSmsP = document.querySelector("#loadingSmsP")
let phoneRevealTimeout;

// Start Page Listeneres

humanButton.addEventListener("click", () => {

    startPage.style.backgroundImage = "url('../images/Cover_Page_with_phone.jpg')"
    humanButton.style.display = "none"
    startPageSmsConversation.style.display = "flex"
    smsSignal.play()
    loadingSms.style.alignItems = "center"
    loadingSms.style.justifyContent = "center"
    loadingSms.style.display = "flex"

    phoneRevealTimeout = setTimeout(() => {
        startPage.style.backgroundImage = "url('../images/Cover_Page_Edit.jpg')"
        startPageSmsConversation.style.display = "none"
        humanButton.style.display = "flex"

        circle1.style.display = "block"
        circle2.style.display = "block"
        circle3.style.display = "block"
        loadingSmsP.textContent = ""
    }, 15000);

})

loadingSms.addEventListener('animationend', () => {

    circle1.style.display = "none"
    circle2.style.display = "none"
    circle3.style.display = "none"

    loadingSms.style.padding = "10px"
    loadingSms.style.alignItems = "flex-start"
    loadingSms.style.justifyContent = "flex-start"


    const firstMessage = "Hej Love, jag har tänkt mycket på dig och ditt brev..."
    const firstMessageSplit = firstMessage.split("")
    let currentLetter = 0

    const smsInterval = setInterval(() => {
        loadingSmsP.textContent += firstMessageSplit[currentLetter]
        currentLetter++

        if (currentLetter === firstMessageSplit.length) {
            clearInterval(smsInterval)
        }
    }, 100)
})

startPageSmsConversation.addEventListener("click", () => {
    startPageSmsConversation.style.transition = "transform 1.5s ease"
    startPageSmsConversation.style.transform = "scale(5)"

    loadingSms.style.display = "none"

    clearTimeout(phoneRevealTimeout)
    setTimeout(() => {
        console.log("TEST");

        switchPage(messagePage)
    }, 2000)

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

//chapter 2
let letterImage = document.getElementById("letterPicture");
let closeLetter = document.getElementById("closeLetter");

letterImage.addEventListener("click", function () {
    chapter2Page.style.display = "none"
    document.getElementById("overlay").style.display = "block";
})

closeLetter.addEventListener("click", function () {
    chapter2Page.style.display = "block"
    document.getElementById("overlay").style.display = "none"
})

let letterImage1 = document.getElementById("letterPicture1");
let closeletter1 = document.getElementById("closeLetter1");
let overlay1 = document.getElementById("overlay1");

letterImage1.addEventListener("click", function () {
    chapter2Page.style.display = "none"
    overlay1.style.display = "block"
})

closeletter1.addEventListener("click", function () {
    chapter2Page.style.display = "block"
    overlay1.style.display = "none"
})

//menuPage

































// Gå fram eller bak mellan sidorna


document.querySelectorAll(".backButton").forEach(btn => {
    btn.addEventListener("click", () => {
        goBackAPage();
    })
})

document.querySelectorAll(".nextButton").forEach(btn => {
    btn.addEventListener("click", () => {
        goForthAPage();
    })
})
