

let introPage = document.querySelector("#intro")
let startPage = document.querySelector("#startPage");
let messagePage = document.querySelector("#messagePage")
let chapter1Page = document.querySelector("#chapter1");
let chapter1loc2 = document.querySelector("#chapter1loc2")
let chapter2Page = document.querySelector("#chapter2");
let chapter3Page = document.querySelector("#chapter3");
let chapter4Page = document.querySelector("#chapter4");
let chapter5Page = document.querySelector("#chapter5");
let chapter6Page = document.querySelector("#chapter6");
let chapter7Page = document.querySelector("#chapter7");
let chapter8Page = document.querySelector("#chapter8");
let chapter9Page = document.querySelector("#chapter9");
let chapter10Page = document.querySelector("#chapter10");
let smsSignal = document.querySelector("#smsSignal");

let newGame = document.querySelector("#newGame")
let continueGame = document.querySelector("#continueGame")
let popupNo = document.querySelector("#popupNo")
let popupYes = document.querySelector("#popupYes")
let popupStartGame = document.querySelector("#popupStartGame")

let allPages = [introPage, startPage, messagePage, chapter1Page, chapter1loc2, chapter2Page, chapter3Page, chapter4Page, chapter5Page, chapter6Page, chapter7Page, chapter8Page, chapter9Page, chapter10Page];

let humanButton = document.querySelector("#humanButton");
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let loadingSms = document.querySelector("#loadingSms")
let startPageSmsConversation = document.querySelector("#startPageSmsConversation")
let loadingSmsP = document.querySelector("#loadingSmsP")
let phoneRevealTimeout;

// Start Game
let visitedTarget;

newGame.addEventListener("click", () => {
    popupStartGame.classList.add("reveal")
    popupStartGame.classList.remove("hide")

    newGame.classList.add("hide")
    continueGame.classList.add("hide")
})

popupYes.addEventListener("click", () => {
    window.localStorage.removeItem("visitedTargets");
    console.log(("emptied local storage"));
    
    introPage.classList.remove("reveal")
    introPage.classList.add("hide")

    startPage.classList.add("reveal")
    startPage.classList.remove("hide")

    visitedTargets = {
    chap1: { visited: false, pageNumber: 1, unlocks: "chap1loc2", open: true },
    chap1loc2: { visited: false, pageNumber: 2, unlocks: "chap2", open: false  },
    chap2: { visited: false, pageNumber: 3, unlocks: "chap3", open: false },
    chap3: { visited: false, pageNumber: 4, unlocks: "chap4", open: false },
    chap4: { visited: false, pageNumber: 5, unlocks: "chap5", open: false },
    chap5: { visited: false, pageNumber: 6, unlocks: "chap6", open: false },
    chap6: { visited: false, pageNumber: 7, unlocks: "chap7", open: false },
    chap7: { visited: false, pageNumber: 8, unlocks: "chap8", open: false },
    chap8: { visited: false, pageNumber: 9, unlocks: "chap9", open: false },
    chap9: { visited: false, pageNumber: 10, unlocks: "chap10", open: false },
    chap10: { visited: false, pageNumber: 11, unlocks: "chap11", open: false },
    chap11: { visited: false, pageNumber: 12, unlocks: "", open: false }
}
})

popupNo.addEventListener("click", () => {
    popupStartGame.classList.remove("reveal")
    popupStartGame.classList.add("hide")

    newGame.classList.remove("hide")
    continueGame.classList.remove("hide")
})

continueGame.addEventListener("click", () => {
    introPage.classList.remove("reveal")
    introPage.classList.add("hide")

    menuPage.classList.add("reveal")
    menuPage.classList.remove("hide")

})

visitedTargets = {
    chap1: { visited: false, pageNumber: 1, unlocks: "chap1loc2", open: true },
    chap1loc2: { visited: false, pageNumber: 2, unlocks: "chap2", open: false  },
    chap2: { visited: false, pageNumber: 3, unlocks: "chap3", open: false },
    chap3: { visited: false, pageNumber: 4, unlocks: "chap4", open: false },
    chap4: { visited: false, pageNumber: 5, unlocks: "chap5", open: false },
    chap5: { visited: false, pageNumber: 6, unlocks: "chap6", open: false },
    chap6: { visited: false, pageNumber: 7, unlocks: "chap7", open: false },
    chap7: { visited: false, pageNumber: 8, unlocks: "chap8", open: false },
    chap8: { visited: false, pageNumber: 9, unlocks: "chap9", open: false },
    chap9: { visited: false, pageNumber: 10, unlocks: "chap10", open: false },
    chap10: { visited: false, pageNumber: 11, unlocks: "chap11", open: false },
    chap11: { visited: false, pageNumber: 12, unlocks: "", open: false }
}

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
    // chap1: { latitude: 55.59728614848932, longitude: 12.990082184069786 },
    chap1: { latitude: 55.60883741458661, longitude: 12.994182711582665 },
    chap1loc2: { latitude: 55.60883741458661, longitude: 12.994182711582665 },
    // chap1loc2: { latitude: 55.60186430935728, longitude: 12.9888972842864 },
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


// check if something was stored in local storage (ie. the cache)
if (window.localStorage.getItem("visitedTargets")) {
    visitedTargets = JSON.parse(window.localStorage.getItem("visitedTargets"));;
}


navigator.geolocation.watchPosition((position) => {
    let userLat = position.coords.latitude;
    let userLng = position.coords.longitude;
    console.log("Position hämtad:", userLat, userLng);

    for (let chapterName in TargetLocations) {
        let chapter = TargetLocations[chapterName]; // dvs. { latitude ..., longitude ... }
        console.log("Kollar:", chapterName, "visited:", visitedTargets[chapterName]);
        if (!visitedTargets[chapterName].visited) {

            let isAtChapter = isWithinDistance(userLat, userLng, chapter.latitude, chapter.longitude);
            console.log(chapterName, "isAtChapter:", isAtChapter);

            if (isAtChapter && visitedTargets[chapterName].open == true) {
                visitedTargets[chapterName].visited = true;
   
                window.localStorage.setItem("visitedTargets", JSON.stringify(visitedTargets));
                if (chapterName == "chap1") {
                    let chap1Span = document.querySelector("#chap1Span");
                    chap1Span.textContent = "🔓";
                } else if (chapterName == "chap1loc2") {
                    let chap1loc2Span = document.querySelector("#chap1loc2Span");
                    chap1loc2Span.textContent = "🔓";
                } else if (chapterName == "chap2") {
                    let chap2Span = document.querySelector("#chap2Span");
                    chap2Span.textContent = "🔓"
                } else if (chapterName == "chap3") {
                    let chap3Span = document.querySelector("#chap3Span");
                    chap3Span.textContent = "🔓"
                } else if (chapterName == "chap4") {
                    let chap4Span = document.querySelector("#chap4Span");
                    chap4Span.textContent = "🔓"
                } else if (chapterName == "chap5") {
                    let chap5Span = document.querySelector("#chap5Span");
                    chap5Span.textContent = "🔓"
                } else if (chapterName == "chap6") {
                    let chap6Span = document.querySelector("#chap6Span");
                    chap6Span.textContent = "🔓"
                } else if (chapterName == "chap7") {
                    let chap7Span = document.querySelector("#chap7Span");
                    chap7Span.textContent = "🔓"
                } else if (chapterName == "chap8") {
                    let chap8Span = document.querySelector("#chap8Span");
                    chap8Span.textContent = "🔓"
                } else if (chapterName == "chap9") {
                    let chap9Span = document.querySelector("#chap9Span");
                    chap9Span.textContent = "🔓"
                } else if (chapterName == "chap10") {
                    let chap10Span = document.querySelector("#chap10Span");
                    chap10Span.textContent = "🔓"
                } else if (chapterName == "chap11") {
                    let chap11Span = document.querySelector("#chap11Span");
                    chap11Span.textContent = "🔓"
                }
            }
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




// Gå tillbaka till menyn efter ett kapitel

document.querySelectorAll(".nextButton").forEach(btn => {
    btn.addEventListener("click", () => {
        backToMenu();
    })
})

// Fortsätter till meny sidan efter sms sidan

const continueButton = document.querySelector("#continueButton");
const menuPage = document.querySelector("#menuPage");
continueButton.addEventListener("click", () => {
    menuPage.classList.remove("hide");
    menuPage.classList.add("reveal");
    messagePage.classList.add("hide");
})

// Öppnar rätt kapitel beroende på vilket kapitel man klickar in sig på i menyn

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("chapterButton")) {
        const chapterName = event.target.dataset.chapter;
        console.log(visitedTargets[chapterName].visited);
        console.log(visitedTargets[chapterName].open);
        if (visitedTargets[chapterName].visited == true && visitedTargets[chapterName].open == true) {
            let unlockedPlace = visitedTargets[chapterName].unlocks
            console.log(visitedTargets, visitedTargets[chapterName].open)
            
            visitedTargets[unlockedPlace].open = true

            const pageIndex = Number(event.target.dataset.page);
            const date = event.target.dataset.date;

            showDateTransition(date, pageIndex);
            menuPage.classList.add("hide");
            
        } 
    }
})

// Startar röstljudet för kapitlarna

document.querySelectorAll(".playChapter").forEach(button => {
    button.addEventListener("click", () => {
        const audio = button.parentElement.querySelector("audio");
        
        if (audio.paused) {
            audio.play();
            button.textContent = "⏸";
        } else {
            audio.pause();
            button.textContent = "▶";
        }
    })
})