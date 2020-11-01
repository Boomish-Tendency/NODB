import React from "react";

const Specifications = (props) => {
  //destructure
  let { average_height_cm, growth_habit, edible, vegetable } = props.species;
  return (
    <li className="bkimg">
      <h2>
        {average_height_cm
          ? `My average height is ${average_height_cm} centimeters`
          : null}
      </h2>
      <h2>{growth_habit ? `My growth habit is ${growth_habit}` : null}</h2>
      <h3>
        {edible
          ? "I am edible!"
          : "You should probably check with someone before eating me"}
      </h3>
      <h3>{vegetable ? "I am a vegetable" : null}</h3>
    </li>
  );
};

export default Specifications;

// Access to API listing scientific name

// Class Components Ideas:
//     Basic Info Tab: Picture and Name
//     Specifications:  Height, Growth Habit, Edible?
//     Growing Info: Light, Humidity range, Ph range:, Precipitation range:, temperature range,
//     Soil profile:  soil humidity, soil nutrient, salinity, texture

// Display Components:
//     Header + Title
//     Right Nav Bar with 4 Button.
//         -Swap to Basic view
//         -Swap to Specifications view
//         -Swap to Swap to Growing view
//         -Swap to Soil Profile view

// CRUD
// GET  Plant by name
// POST Plants to My House
// PUT Input for adding Room property
// DELETE plant from My House
