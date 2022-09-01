import ancientsData from "../data/ancients";
const getList = document.querySelector(".ancient-card");

export const setAncients = () => {
  ancientsData.forEach((item, idx) => {
    
    const createItem = document.createElement("li");
    const createItemBtn = document.createElement("button");
    const createCart = document.createElement("img");

    createItem.classList.add("ancient-card-item");
    createItemBtn.classList.add("ancient-card-btn");
    createCart.classList.add("ancient-card-img");
    createCart.setAttribute("id", `${[idx]}`);
    createCart.setAttribute("name", `${item.name}`);

    createCart.src = `${item.cardFace}`;
    getList.append(createItem);
    createItem.append(createItemBtn);
    createItemBtn.append(createCart);
  });
};
