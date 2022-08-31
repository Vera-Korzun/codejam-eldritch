import ancientsData from "../data/ancients";
//const stageArray = ["First stage", "Second stage", "Third stage"];

export const setStages = (array, idx) => {
  // console.log("ancientsData", ancientsData); //list of ancients quality

  const getStagesList = document.querySelector(".stages-list");
  // stageArray.forEach((category, i) => {
  //   console.log("ancientsData[idx]", ancientsData[idx]);
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
  // });

  //console.log("array", array);
  //console.log("idx", idx);
};
