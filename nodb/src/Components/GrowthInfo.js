import React from "react";

const GrowthInfo = (props) => {
  //destructure
  let {
    light,
    atmospheric_humidity,
    ph_minimum,
    ph_maximum,
    growth_form,
  } = props.species;
  return (
    <li className="bkimg">
      <h3>{light > 5 ? "I prefer it bright" : "I prefer some shade"}</h3>
      <h3>
        {atmospheric_humidity > 5
          ? "I prefer a lot of rain"
          : "I prefer a little rain"}
      </h3>
      <h3>{ph_minimum ? `My ph minimum is: ${ph_minimum}` : null}</h3>
      <h3>{ph_maximum ? `My ph maximum is: ${ph_maximum}` : null}</h3>
      <h3>{growth_form ? `I grow from a ${growth_form}` : null}</h3>
    </li>
  );
};

export default GrowthInfo;

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
