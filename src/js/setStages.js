import ancientsData from "../data/ancients";

export const setStages = (idx) => {
   const getStagesList = document.querySelector(".stages-list");

  getStagesList.innerHTML = `
      <li class="stages-list-item" >First stage
      <ul class="list cards-amount"> 
      <li class="cards-amount-item">${ancientsData[idx].firstStage.greenCards}</li>    
      <li class="cards-amount-item">${ancientsData[idx].firstStage.brownCards}</li> 
      <li class="cards-amount-item">${ancientsData[idx].firstStage.blueCards}</li>  
      </ul>
      </li>
      <li class="stages-list-item" >Second stage
      <ul class="list cards-amount"> 
      <li class="cards-amount-item">${ancientsData[idx].secondStage.greenCards}</li>    
      <li class="cards-amount-item">${ancientsData[idx].secondStage.brownCards}</li> 
      <li class="cards-amount-item">${ancientsData[idx].secondStage.blueCards}</li>  
      </ul>
      </li>
      <li class="stages-list-item" >Third stage
      <ul class="list cards-amount"> 
      <li class="cards-amount-item">${ancientsData[idx].thirdStage.greenCards}</li>    
      <li class="cards-amount-item">${ancientsData[idx].thirdStage.brownCards}</li> 
      <li class="cards-amount-item">${ancientsData[idx].thirdStage.blueCards}</li>  
      </ul>
      </li>
      `;
};
