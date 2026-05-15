

let introPage = document.querySelector("#intro")
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
let chapter11Page = document.querySelector("#chapter11");
let smsSignal = document.querySelector("#smsSignal")

let newGame = document.querySelector("#newGame")
let continueGame = document.querySelector("#continueGame")
let popupNo = document.querySelector("#popupNo")
let popupYes = document.querySelector("#popupYes")
let popupStartGame = document.querySelector("#popupStartGame")

let allPages = [introPage, startPage, messagePage, chapter1Page, chapter2Page, chapter3Page, chapter4Page, chapter5Page, chapter6Page, chapter7Page, chapter8Page, chapter9Page, chapter10Page, chapter11Page];

let humanButton = document.querySelector("#humanButton");
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let loadingSms = document.querySelector("#loadingSms")
let startPageSmsConversation = document.querySelector("#startPageSmsConversation")
let loadingSmsP = document.querySelector("#loadingSmsP")
let phoneRevealTimeout;
let letterBits = [
    "Nu sitter jag här i din soffa, medan du sover i rummet intill, och tystnaden i din nya lägenhet är så hög att jag inte kan hålla det inne längre.",
    "Du förtjänar att veta varför jag har varit som en skugga av mig själv. Men det jag aldrig sa då, den där kvällen efter konserten när vi började prata igen, var att jag inte var ensam.",
    "Jag hade ett liv i Köpenhamn. Vi hade ju inte sagt att vi var tillsammans igen, eller hur? Jag ville ha kvar oss så desperat att jag var beredd att bygga vår nya framtid på en lögn.",
    "Förlåt för att jag inte var modig nog när det faktiskt betydde något.",
];

// Start Game
let visitedTargets = {
    chap1: { visited: false, pageNumber: 1, unlocks: "chap2", open: true },
    chap2: { visited: false, pageNumber: 2, unlocks: "chap3", open: false },
    chap3: { visited: false, pageNumber: 3, unlocks: "chap4", open: false },
    chap4: { visited: false, pageNumber: 4, unlocks: "chap5", open: false },
    chap5: { visited: false, pageNumber: 5, unlocks: "chap6", open: false },
    chap6: { visited: false, pageNumber: 6, unlocks: "chap7", open: false },
    chap7: { visited: false, pageNumber: 7, unlocks: "chap8", open: false },
    chap8: { visited: false, pageNumber: 8, unlocks: "chap9", open: false },
    chap9: { visited: false, pageNumber: 9, unlocks: "chap10", open: false },
    chap10: { visited: false, pageNumber: 10, unlocks: "chap11", open: false },
    chap11: { visited: false, pageNumber: 11, unlocks: "", open: false }
}

// check if something was stored in local storage (ie. the cache)
if (window.localStorage.getItem("visitedTargets")) {
    visitedTargets = JSON.parse(window.localStorage.getItem("visitedTargets"));
}


newGame.addEventListener("click", () => {
    popupStartGame.classList.add("reveal")
    popupStartGame.classList.remove("hide")

    newGame.classList.add("hide")
    continueGame.classList.add("hide")
})

popupYes.addEventListener("click", () => {
    window.localStorage.removeItem("visitedTargets");
    console.log(("emptied local storage"));

    popupStartGame.classList.remove("reveal")
    popupStartGame.classList.add("hide")

    introPage.classList.remove("reveal")
    introPage.classList.add("hide")

    startPage.classList.add("reveal")
    startPage.classList.remove("hide")


    visitedTargets = {
        chap1: { visited: false, pageNumber: 1, unlocks: "chap2", open: true },
        chap2: { visited: false, pageNumber: 2, unlocks: "chap3", open: false },
        chap3: { visited: false, pageNumber: 3, unlocks: "chap4", open: false },
        chap4: { visited: false, pageNumber: 4, unlocks: "chap5", open: false },
        chap5: { visited: false, pageNumber: 5, unlocks: "chap6", open: false },
        chap6: { visited: false, pageNumber: 6, unlocks: "chap7", open: false },
        chap7: { visited: false, pageNumber: 7, unlocks: "chap8", open: false },
        chap8: { visited: false, pageNumber: 8, unlocks: "chap9", open: false },
        chap9: { visited: false, pageNumber: 9, unlocks: "chap10", open: false },
        chap10: { visited: false, pageNumber: 10, unlocks: "chap11", open: false },
        chap11: { visited: false, pageNumber: 11, unlocks: "", open: false }
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

let RADIUS = 100;
let TargetLocations = {
    chap1: { latitude: 55.60894763773588, longitude: 12.994335860211391 },
    chap2: { latitude: 55.61093257525446, longitude: 12.982162278152366 },
    chap3: { latitude: 55.61272449542715, longitude: 12.995866107120628 },
    chap4: { latitude: 55.610805511356226, longitude: 12.994946879349987 },
    chap5: { latitude: 55.607722870654634, longitude: 12.993585994872022 },
    chap6: { latitude: 55.603818818661935, longitude: 12.98919555681913 },
    chap7: { latitude: 55.60694545975628, longitude: 12.992263697683203 },
    chap8: { latitude: 55.60801646928984, longitude: 12.991059809539934 },
    chap9: { latitude: 55.60978491240894, longitude: 12.993780111176735 },
    chap10: { latitude: 55.60978491240894, longitude: 12.993780111176735 },
    chap11: { latitude: 55.60978491240894, longitude: 12.993780111176735 }
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

//Chapter 5
document.getElementById("getLetterButton1").addEventListener("click", () => {
    document.getElementById("getLetterButton1").textContent = letterBits[0];
    setTimeout(() => {
        document.getElementById("letterSound1").play();
    }, 3000)
})
//Chapter 8
document.getElementById("getLetterButton2").addEventListener("click", () => {
    document.getElementById("getLetterButton2").textContent = letterBits[1];
    setTimeout(() => {
        document.getElementById("letterSound2").play();
    }, 3000)
    setTimeout(() => {
        document.getElementById("letterSound3").play();
    }, 9000)
})
//Chapter 9
document.getElementById("getLetterButton3").addEventListener("click", () => {
    document.getElementById("getLetterButton3").textContent = letterBits[2];
    setTimeout(() => {
        document.getElementById("letterSound4").play();
    }, 3000)
    setTimeout(() => {
        document.getElementById("letterSound5").play();
    }, 6000)
    setTimeout(() => {
        document.getElementById("letterSound6").play();
    }, 13000)
})
//Chapter 10
document.getElementById("getLetterButton4").addEventListener("click", () => {
    document.getElementById("fullLetterText").textContent = letterBits.join("\n\n");
    setTimeout(() => {
        document.getElementById("letterSound7").play();
    }, 3000)
    setTimeout(() => {
        document.getElementById("letterSound8").play();
    }, 14000)
    setTimeout(() => {
        document.getElementById("letterSound9").play();
    }, 19000)
    setTimeout(() => {
        document.getElementById("letterSound10").play();
    }, 26000)
    setTimeout(() => {
        document.getElementById("letterSound11").play();
    }, 29000)
    setTimeout(() => {
        document.getElementById("letterSound12").play();
    }, 34000)
    setTimeout(() => {
        document.getElementById("letterSound13").play();
    }, 41000)
})


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
      /*   console.log(visitedTargets[chapterName].visited);
        console.log(visitedTargets[chapterName].open); */
        if (visitedTargets[chapterName].visited == true && visitedTargets[chapterName].open == true) {
            if(!visitedTarget[chapterName] == "chap11" ) {
                let unlockedPlace = visitedTargets[chapterName].unlocks
                /* console.log(visitedTargets, visitedTargets[chapterName].open) */

                visitedTargets[unlockedPlace].open = true

                const pageIndex = Number(event.target.dataset.page);
                const date = event.target.dataset.date;

                showDateTransition(date, pageIndex);
                menuPage.classList.add("hide");
            }

        }
    }
})

// Startar röstljudet för kapitlarna

document.querySelectorAll(".playChapter").forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonEl = event.currentTarget;

        const audio = buttonEl.closest(".audioContainer").querySelector("audio");

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    })
})

const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const yesAnswer = document.querySelector("#yesAnswer");
const noAnswer = document.querySelector("#noAnswer");

yesButton.addEventListener("click", () => {
    chapter11Page.classList.add("hide");
    yesAnswer.classList.remove("hide");
})

noButton.addEventListener("click", () => {
    chapter11Page.classList.add("hide");
    noAnswer.classList.remove("hide");
})

document.querySelectorAll(".backToStart").forEach(button => {
    button.addEventListener("click", () => {
        yesAnswer.classList.add("hide");
        noAnswer.classList.add("hide");
        introPage.classList.remove("hide");
    })
})