import ancientsData from "../data/ancients";
import greenCards from "../data/mythicCards/green/index";
import blueCards from "../data/mythicCards/blue/index";
import brownCards from "../data/mythicCards/brown/index";
import { setStages } from "./setStages";

export const setLevel = (ancientIdx, difficultyIdx) => {
  if (difficultyIdx == 2) {
      let deck = generateNormalDeck(ancientIdx, getCards);
      setStages(ancientIdx);
    console.log("deck2", deck);
  }
  if (difficultyIdx == 0) {
      let deck = generateSuperEasyDeck(ancientIdx);
       setStages(ancientIdx);
    console.log("deck0", deck);
  }
  if (difficultyIdx == 1) {
      let deck = generateEasyDeck(ancientIdx);
       setStages(ancientIdx);
    console.log("deck0", deck);
  }
};

export const generateNormalDeck = (ancientIdx) => {
  let greenCardsTotal = getGreenTotal(ancientIdx);
  let blueCardsTotal = getBlueTotal(ancientIdx);
  let brownCardsTotal = getBrownTotal(ancientIdx);

  let arrayOfCards = getCards(greenCardsTotal, greenCards);
  arrayOfCards.push(...getCards(blueCardsTotal, blueCards));
  arrayOfCards.push(...getCards(brownCardsTotal, brownCards));
  return arrayOfCards;
};

const generateEasyDeck = (ancientIdx) => {
  let greenCardsTotal = getGreenTotal(ancientIdx);
  let blueCardsTotal = getBlueTotal(ancientIdx);
  let brownCardsTotal = getBrownTotal(ancientIdx);

  let arrayOfCards = getCards(
    greenCardsTotal,
    greenCards.filter(
      (card) => card.difficulty === "easy" || card.difficulty === "normal"
    )
  );
  arrayOfCards.push(
    ...getCards(
      blueCardsTotal,
      blueCards.filter(
        (card) => card.difficulty === "easy" || card.difficulty === "normal"
      )
    )
  );
  arrayOfCards.push(
    ...getCards(
      brownCardsTotal,
      brownCards.filter(
        (card) => card.difficulty === "easy" || card.difficulty === "normal"
      )
    )
  );
  return arrayOfCards;
};

const generateSuperEasyDeck = (ancientIdx) => {
  let greenCardsTotal = getGreenTotal(ancientIdx);
  let blueCardsTotal = getBlueTotal(ancientIdx);
  let brownCardsTotal = getBrownTotal(ancientIdx);

  let arrayOfCards = getSuperEasyCards(
    greenCardsTotal,
    greenCards.filter((card) => card.difficulty === "easy"),
    greenCards.filter((card) => card.difficulty === "normal")
  );
  arrayOfCards.push(
    ...getSuperEasyCards(
      blueCardsTotal,
      blueCards.filter((card) => card.difficulty === "easy"),
      blueCards.filter((card) => card.difficulty === "normal")
    )
  );
  arrayOfCards.push(
    ...getSuperEasyCards(
      brownCardsTotal,
      brownCards.filter((card) => card.difficulty === "easy"),
      brownCards.filter((card) => card.difficulty === "normal")
    )
  );

  return arrayOfCards;
};

const getCards = (n, cards) => {
  cards.sort(() => 0.5 - Math.random());
  return cards.slice(0, n);
};

const getSuperEasyCards = (n, easyCards, normalCards) => {
  if (n <= easyCards.length) {
    let cards = getCards(n, easyCards);
    return cards;
  } else {
    let size = n - easyCards.length;
    let cards = easyCards;
    cards.push(...getCards(size, normalCards));
    return cards;
  }
};

const getGreenTotal = (ancientIdx) => {
  return (
    ancientsData[ancientIdx].firstStage.greenCards +
    ancientsData[ancientIdx].secondStage.greenCards +
    ancientsData[ancientIdx].thirdStage.greenCards
  );
};

const getBlueTotal = (ancientIdx) => {
  return (
    ancientsData[ancientIdx].firstStage.blueCards +
    ancientsData[ancientIdx].secondStage.blueCards +
    ancientsData[ancientIdx].thirdStage.blueCards
  );
};

const getBrownTotal = (ancientIdx) => {
  return (
    ancientsData[ancientIdx].firstStage.brownCards +
    ancientsData[ancientIdx].secondStage.brownCards +
    ancientsData[ancientIdx].thirdStage.brownCards
  );
};
