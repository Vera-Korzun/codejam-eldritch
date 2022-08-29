import ancientsList from "../assets/Ancients/index";
const getList = document.querySelector(".ancient-cart");

export const setAncients = () => {
  
    Object.keys(ancientsList).forEach((key) => {
      const createItem = document.createElement("li");
      const createItemBtn = document.createElement("button");
      const createCart = document.createElement("img");
      
        createItem.classList.add("ancient-cart-item");
        createItemBtn.classList.add("ancient-cart-btn");
        createCart.classList.add("ancient-cart-img");
        
        createCart.src = `${ancientsList[key]}`;
        getList.append(createItem);
        createItem.append(createItemBtn);
        createItemBtn.append(createCart);
  });

};
