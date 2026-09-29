'use strict'

const cardsContainer = document.querySelector("#cardsContainer");

cardsContainer.addEventListener('click', function (event) {
    const button = event.target.closest("[data-read-more-btn]");

    if (!button) {
        return;
    }    

    const card = button.closest(".card");
    const longText = card.querySelector(".card__text__long");

    card.classList.toggle("expanded");
    if (card.classList.contains("expanded")) {
        longText.hidden = false;
        button.textContent = "Hide";
    } else {
        longText.hidden = true;
        button.textContent = "Read more";
    }
});