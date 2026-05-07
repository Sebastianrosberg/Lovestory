// User store if they've been at a target or not
let visitedTargets = {
    chap1: false,
    chap2: false,
    chap3: false,
    chap4: false,
    chap5: false,
    chap6: false,
    chap7: false,
    chap8: false,
    chap9: false,
    chap10: false
}

// check if something was stored in local storage (ie. the cache)
if (window.localStorage.getItem("visitedTargets")) {
    visitedTarget = JSON.parse(window.localStorage.getItem("visitedTargets"));
}


navigator.geolocation.watchPosition((position) => {
    let userLat = position.coords.latitude;
    let userLng = position.coords.longitude;

    for (let chapterName in TargetLocations) {
        let chapter = TargetLocations[chapterName]; // dvs. { latitude ..., longitude ... }

        if (!visitedTargets[chapterName]) {

            let isAtChapter = isWithinDistance(chapter.latitude, chapter.longitude, userLat, userLng);
            if (isAtChapter) {
                window.localStorage.setItem("visitedTargets", JSON.stringify(visitedTargets));
                if (chapter == "chap1") {
                    let chap1Span = document.querySelector("#chapter1Span");
                    chap1Span.style.backgroundColor = "🔓";
                }
            }
        }
    }

    // Make sure to only check if they're at chap1 if they havent been already, otherwise do nothing.
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

function isWithinDistance(userLat, userLng, targetLat, targetLng) {
    let distance = getDistanceM(userLat, userLng, targetLat, targetLng);
    if (distance <= RADIUS) {
        // geoLocCircle.style.backgroundColor = "green"
        return true;
    }
    return false;
}