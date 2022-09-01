import difficulties from "../data/difficulties.js";
import { setMixBtn } from "./setMixBtn";
const getLevelsList = document.querySelector(".levels-list");
const getLevel = document.querySelector(".level");
const getDeck = document.querySelector(".deckBtn");

export const difficultyLevel = () => {
  const getCartItems = document.querySelectorAll(".ancient-card-btn");
  getCartItems.forEach((item) => {
    item.addEventListener("click", currentItem);
  });
};

const currentItem = (event) => {
  getLevel.innerHTML = "";
  showLevels(event.target.id);
};

const showLevels = (n) => {
  document.querySelector(".stages-list").innerHTML = "";
  document.querySelector(".mixDeckBtn").classList.add("hidden");
  document.querySelector(".deckBtn").classList.add("hidden");
  getLevelsList.innerHTML = "";
  const getCartItems = document.querySelectorAll(".ancient-card-btn");
  const getCartItemsArr = Array.from(getCartItems);
  getCartItemsArr.forEach((element) => {
    element.classList.remove("active");
  });

  getCartItemsArr[n].classList.add("active");

  difficulties.forEach((item, idx) => {
    const creatListItem = document.createElement("li");
    const creatListItemBtn = document.createElement("button");
    creatListItemBtn.innerHTML = `${item.id}`;
    creatListItem.classList.add("levels-list-item");
    creatListItemBtn.classList.add("levels-list-btn");

    creatListItemBtn.onclick = function () {
      getLevel.innerHTML = `${item.id} game`;
      getDeck.innerHTML = "";
      document.querySelector(".stages-list").innerHTML = "";
      setMixBtn(n, idx);
    };

    getLevelsList.append(creatListItem);
    creatListItem.append(creatListItemBtn);
  });
};
