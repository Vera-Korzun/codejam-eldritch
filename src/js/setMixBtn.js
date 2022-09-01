import { setLevel } from "./openLevel";
import { setDeck } from "./setDeck";
const mixBtn = document.querySelector(".mixDeckBtn");
const getDeck = document.querySelector(".deckBtn");

export const setMixBtn = (n, idx) => {
  mixBtn.classList.remove("hidden");

    mixBtn.onclick = function () {
        getDeck.innerHTML = "";
        setLevel(n, idx);
        setDeck();
  };
};
