import cardFace from "../assets/mythicCardBackground.png";
const getDeck = document.querySelector(".deckBtn");

export const setDeck = () => {
  getDeck.classList.remove("hidden");

  const createDeckImg = document.createElement("img");
  createDeckImg.classList.add("deckBtn-img");
  createDeckImg.src = `${cardFace}`;

  getDeck.append(createDeckImg);
};
