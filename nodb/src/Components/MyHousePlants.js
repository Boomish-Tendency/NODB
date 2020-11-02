import React from "react";

const MyHousePlants = (props) => {
  let myHousePlants = props.myHousePlants;
  return (
    <div className= "myPlantsBox">
      <h1>My Saved Plants</h1>
      <ul className="middle">
        <li
          onClick={(e) => {
            e.stopPropagation();
            this.props.removeFromMyHousePlantsArr(myHousePlants[0]);
          }}
        >
          {myHousePlants[0] ? myHousePlants[0]  : null}
        </li>
        <li
          onClick={(e) => {
            e.stopPropagation();
            this.props.removeFromMyHousePlantsArr(myHousePlants[1]);
          }}
        >
          {myHousePlants[1] ? myHousePlants[1] : null}
        </li>

        <li
          onClick={(e) => {
            e.stopPropagation();
            this.props.removeFromMyHousePlantsArr(myHousePlants[2]);
          }}
        >
          {myHousePlants[2] ? myHousePlants[2] : null}
        </li>

        <li
          onClick={(e) => {
            e.stopPropagation();
            this.props.removeFromMyHousePlantsArr(myHousePlants[3]);
          }}
        >
          {myHousePlants[3] ? myHousePlants[3] : null}
        </li>

        <li
          onClick={(e) => {
            e.stopPropagation();
            this.props.removeFromMyHousePlantsArr(myHousePlants[4]);
          }}
        >
          {myHousePlants[4] ? myHousePlants[4] : null}
        </li>
      </ul>
    </div>
  );
};

export default MyHousePlants;
