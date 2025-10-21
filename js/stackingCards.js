const personalCards = document.getElementsByClassName("project-card personal");
const professionalCards = document.getElementsByClassName("project-card professional");

function resetActiveStatus(card) {
    if (card.classList.contains("personal")) {
        let personalCards = document.querySelectorAll(".personal.active");
        for (let personalCard of personalCards) {
            if (personalCard.classList.contains("active")) {
                personalCard.classList.remove("active");
            }
            personalCard.classList.add("lite");
        }
    } else if (card.classList.contains("professional")) {
        let professionalCards = document.querySelectorAll(".professional");
        for (let professionalCard of professionalCards) {
            if (professionalCard.classList.contains("active")) {
                professionalCard.classList.remove("active");
            }
            professionalCard.classList.add("lite");
        }
    }
}

for (let card of personalCards) {
    card.addEventListener("click", () => {
        resetActiveStatus(card);
        card.classList.add("active");
        card.classList.remove("lite");
    });
}

for (let card of professionalCards) {
    card.addEventListener("click", () => {
        resetActiveStatus(card);
        card.classList.add("active");
        card.classList.remove("lite");
    });
}