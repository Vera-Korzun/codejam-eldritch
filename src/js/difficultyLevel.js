import difficulties from "../data/difficulties.js";
const getCart = document.querySelector(".ancient-cart");
const getLevelsList = document.querySelector(".levels-list");

export const difficultyLevel = () => {
  const getCartItems = document.querySelectorAll(".ancient-cart-btn");
  getCartItems.forEach((item) => {
    item.addEventListener("click", currentItem);
  });
};

const currentItem = (event) => {
  showLevels(event.target.id);
};

const showLevels = (n) => {
  getLevelsList.innerHTML = "";
  const getCartItems = document.querySelectorAll(".ancient-cart-btn");
  const getCartItemsArr = Array.from(getCartItems);
  getCartItemsArr.forEach((element) => {
    element.classList.remove("active");
  });

  getCartItemsArr[n].classList.add("active");

  difficulties.forEach((item) => {
    const creatListItem = document.createElement("li");
    const creatListItemBtn = document.createElement("button");
    creatListItemBtn.innerHTML = `${item.id}`;
      creatListItem.classList.add("levels-list-item");
      creatListItemBtn.classList.add("levels-list-btn");

    getLevelsList.append(creatListItem);
    creatListItem.append(creatListItemBtn);
  });
};
