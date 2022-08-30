import ancientsData from "../data/ancients";
const stageArray = ["First stage", "Second stage", "Third stage"];

export const setNormal = (array, idx) => {
  //ancientsData[idx];
  console.log("ancientsData[idx]", ancientsData[idx]);

  const getStagesList = document.querySelector(".stages-list");
  stageArray.forEach((category) => {
    getStagesList.innerHTML += `
      <li class="stages-list-item" >${category}
        <span></span>
        <span></span>
        <span></span>
      </li>
      `;
  });

  console.log("array", array);
  console.log("ancientsData", ancientsData);
  console.log("idx", idx);
};
