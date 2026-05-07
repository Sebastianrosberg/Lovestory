
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

let RADIUS = 50;
let TargetLocations = {
    chap1: { latitude: 55.59728614848932, longitude: 12.990082184069786 },
    chap1loc2: { latitude: 55.60186430935728, longitude: 12.9888972842864 },
    chap2: { latitude: 55.610959077289216, longitude: 12.982203891552459 },
    chap3: { latitude: 55.61964569300686, longitude: 12.978360885921994 },
    chap4: { latitude: 55.60883601160361, longitude: 12.994571284715402 },
    chap5: { latitude: 55.607770643254035, longitude: 12.99358194776491 },
    chap6: { latitude: 55.603889968250826, longitude: 12.989189268726877 },
    chap7: { latitude: 55.61178808302698, longitude: 12.997833611055748 },
    chap8: { latitude: 55.60803874759567, longitude: 12.991047352501079 },
    chap9: { latitude: 55.59728614848932, longitude: 12.990082184069786 },
    chap10: { latitude: 55.59728614848932, longitude: 12.990082184069786 },
    chap11: { latitude: 55.59728614848932, longitude: 12.990082184069786 }
}

// User store if they've been at a target or not
let visitedTargets = {
    chap1: false,
    chap1loc2: false,
    chap2: false,
    chap3: false,
    chap4: false,
    chap5: false,
    chap6: false,
    chap7: false,
    chap8: false,
    chap9: false,
    chap10: false,
    chap11: false
}

// check if something was stored in local storage (ie. the cache)
if (window.localStorage.getItem("visitedTargets")) {
    visitedTargets = JSON.parse(window.localStorage.getItem("visitedTargets"));
}

navigator.geolocation.watchPosition((position) => {
    let userLat = position.coords.latitude;
    let userLng = position.coords.longitude;

    for (let chapterName in TargetLocations) {
        let chapter = TargetLocations[chapterName]; // dvs. { latitude ..., longitude ... }

        if (!visitedTargets[chapterName]) {

            let isAtChapter = isWithinDistance(chapter.latitude, chapter.longitude, userLat, userLng);
            if (isAtChapter) {
                visitedTargets[chapterName] = true;
                window.localStorage.setItem("visitedTargets", JSON.stringify(visitedTargets));
                if (chapterName == "chap1") {
                    let chap1Span = document.querySelector("#chapter1Span");
                    chap1Span.textContent = "🔓";
                } else if (chapterName == chap2) {
                    let chap2Span = document.querySelector("#chapter2Span");
                    chap2Span.textContent = "🔓"
                } else if (chapterName == chap3) {
                    let chap3Span = document.querySelector("#chapter3Span");
                    chap3Span.textContent = "🔓"
                } else if (chapterName == chap4) {
                    let chap4Span = document.querySelector("#chapter4Span");
                    chap4Span.textContent = "🔓"
                } else if (chapterName == chap5) {
                    let chap5Span = document.querySelector("#chapter5Span");
                    chap5Span.textContent = "🔓"
                } else if (chapterName == chap6) {
                    let chap6Span = document.querySelector("#chapter6Span");
                    chap6Span.textContent = "🔓"
                } else if (chapterName == chap7) {
                    let chap7Span = document.querySelector("#chapter7Span");
                    chap7Span.textContent = "🔓"
                } else if (chapterName == chap8) {
                    let chap8Span = document.querySelector("#chapter8Span");
                    chap8Span.textContent = "🔓"
                } else if (chapterName == chap9) {
                    let chap9Span = document.querySelector("#chapter9Span");
                    chap9Span.textContent = "🔓"
                } else if (chapterName == chap10) {
                    let chap10Span = document.querySelector("#chapter10Span");
                    chap10Span.textContent = "🔓"
                } else if (chapterName == chap11) {
                    let chap11Span = document.querySelector("#chapter11Span");
                    chap11Span.textContent = "🔓"
                }
            }
        }
    }

    if (!visitedTargets.chap1) {
        let chap1 = TargetLocations.chap1;
        let isAtChap1 = isWithinDistance(chap1.latitude, chap1.longitude, userLat, userLng);
        if (isAtChap1) {
            visitedTargets.chap1 = true;
            // Store changes to local storage
            window.localStorage.setItem("visitedTargets", JSON.stringify(visitedTargets));

            // update buttons accordingly
        }
    }
})

function getDistanceM(lat1, lng1, lat2, lng2) {
    console.log("FunctionCall getdistance");

    const metersPerDeg = 111139;
    const dx = (lng2 - lng1) * metersPerDeg * Math.cos(lat1 * Math.PI / 180);
    const dy = (lat2 - lat1) * metersPerDeg;
    return Math.sqrt(dx * dx + dy * dy);
}

function isWithinDistance(userLat, userLng, targetLat, targetLng) {
    let distance = getDistanceM(userLat, userLng, targetLat, targetLng);
    if (distance <= RADIUS) {
        // geoLocCircle.style.backgroundColor = "green"
        return true;
    }
    return false;
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

const continueButton = document.querySelector("#continueButton");
const menuPage = document.querySelector("#menuPage");
continueButton.addEventListener("click", () => {
    menuPage.classList.remove("hide");
    menuPage.classList.add("reveal");
    messagePage.classList.add("hide");
})