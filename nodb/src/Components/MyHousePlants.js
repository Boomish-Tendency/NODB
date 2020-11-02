import React from "react";

const MyHousePlants = (props) => {
  let myHousePlants = props.myHousePlants;
  return (
    <div className= "myPlantsBox">
      <h1>My Saved Plants</h1>
      <ul className="middle">
        <li
          onClick={(e) => {
            props.removeFromMyHousePlantsArr(myHousePlants[0]);
            console.log(myHousePlants )
          }}
        >
          {myHousePlants[0] ? myHousePlants[0].common_name  : null}
        </li>
        <li
          onClick={(e) => {
            props.removeFromMyHousePlantsArr(myHousePlants[1]);
          }}
        >
          {myHousePlants[1] ? myHousePlants[1].common_name : null}
        </li>

        <li
          onClick={(e) => {
            props.removeFromMyHousePlantsArr(myHousePlants[2]);
          }}
        >
          {myHousePlants[2] ? myHousePlants[2].common_name : null}
        </li>

        <li
          onClick={(e) => {
            props.removeFromMyHousePlantsArr(myHousePlants[3]);
          }}
        >
          {myHousePlants[3] ? myHousePlants[3].common_name : null}
        </li>

        <li
          onClick={(e) => {
            props.removeFromMyHousePlantsArr(myHousePlants[4]);
          }}
        >
          {myHousePlants[4] ? myHousePlants[4].common_name : null}
        </li>
      </ul>
    </div>
  );
};

export default MyHousePlants;
